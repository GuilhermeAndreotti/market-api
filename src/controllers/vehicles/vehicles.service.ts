import { Injectable, HttpStatus } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuidV4 } from 'uuid';
import { Vehicle } from '@models/vehicles.model';
import { CreateVehicleDto } from '@dtos/create-vehicle.dto';
import axios from 'axios';
import { mountVehicleToMercadoLivre } from 'src/util/publishVehicle';
import { ErrorDetailResponse } from '@api-doc/errorDetail.response';
import { plainToInstance } from 'class-transformer';
import { UpdateAndPostVehicle } from '@dtos/update-vehicle-and-post.dto';
import { DeleteVehicleDto } from '@dtos/delete-vehicle.dto';
import { UpdateVehicleDto } from '@dtos/update-vehicle.dto';
import { mountVehicleToMercadoLivreToEdit } from 'src/util/editVehicle';
import { AdminService } from '@controllers/admin/admin.service';
import { mlbAnswerQuestion } from '@dtos/mlb-answer-question.dto';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepository: Repository<Vehicle>,
    private readonly adminService: AdminService,
  ) {}

  async findAllVehicles(): Promise<Vehicle[]> {
    try {
      return await this.vehiclesRepository.find();
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        `Failed to find all vehicles`,
        '',
        'VehicleService -> findAllVehicles',
      );
    }
  }

  async findVehicleById(vehicleId: string): Promise<Vehicle> {
    try {
      return await this.vehiclesRepository.findOne({ where: { vehicleId } });
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        `Failed to find vehicle by id`,
        '',
        'VehicleService -> findVehicleById',
      );
    }
  }

  async createVehicle(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    try {
      const newVehicle = this.vehiclesRepository.create({
        ...createVehicleDto,
      });
      newVehicle.vehicleId = uuidV4();

      return await this.vehiclesRepository.save(newVehicle);
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        `Failed to create vehicle`,
        '',
        'VehicleService -> createVehicle',
      );
    }
  }

  public async updateVehicle(
    vehicleId: string,
    updateVehicleDto: CreateVehicleDto,
  ) {
    try {
      delete updateVehicleDto.published;
      const update = plainToInstance(Vehicle, updateVehicleDto);

      const { affected } = await this.vehiclesRepository.update(
        vehicleId,
        update,
      );

      return affected
        ? {
            code: HttpStatus.OK,
            message: 'Veículo atualizado com sucesso.',
          }
        : {
            code: HttpStatus.NOT_FOUND,
            message: 'Não foi possível localizar o veículo para a atualização',
          };
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        `Failed to update vehicle.`,
        '',
        'VehicleService -> updateVehicle',
      );
    }
  }

  async deleteVehicle(
    deleteVehicleDto: DeleteVehicleDto,
  ): Promise<{ status: number; message: string }> {
    try {
      const vehicleToDelete = await this.vehiclesRepository.findOne({
        where: {
          vehicleId: deleteVehicleDto.vehicleId,
        },
      });
      const result = await this.vehiclesRepository.delete(
        deleteVehicleDto.vehicleId,
      );
      if (result.affected > 0) {
        return {
          status: HttpStatus.OK,
          message: 'Vehicle deleted successfully.',
        };
      } else {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Failed to delete the vehicle.',
        };
      }
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        `Failed to delete item`,
        '',
        'VehicleService -> deleteVehicle',
      );
    }
  }

  async getVehicle(itemId: string) {
    try {
      const accessToken = await this.adminService.getAuthMercadoLivre();
      const response = await axios.get(
        `https://api.mercadolibre.com/items/${itemId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      console.log(response);
      return response.data;
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        `Failed to fetch item`,
        '',
        'VehicleService -> getVehicle',
      );
    }
  }

  async postAVehicleOnMercadoLivre(vehicleId: string) {
    try {
      const token = await this.adminService.getAuthMercadoLivre();

      const vehicle = await this.vehiclesRepository.findOne({
        where: {
          vehicleId: vehicleId,
        },
      });

      const publishedVehicle = await this.vehiclesRepository.findOne({
        where: {
          published: true,
        },
      });

      if (publishedVehicle) {
        throw new ErrorDetailResponse(
          HttpStatus.FORBIDDEN,
          'Está versão só aceita um anúncio. Por favor, remova a publicação anterior para publicar esta nova.',
          '',
          'VehicleService -> deleteAVehicleOnMercadoLivre',
        );
      }

      const mercadoLivreData = mountVehicleToMercadoLivre(vehicle);

      try {
        const response = await axios.post(
          `https://api.mercadolibre.com/items`,
          mercadoLivreData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          },
        );
        const { affected } = await this.vehiclesRepository.update(vehicleId, {
          permalink: response.data.permalink,
          published: true,
          itemId: response.data.id,
        });

        try {
          const resp = await axios.post(
            `https://api.mercadolibre.com/items/${response.data.id}/description`,
            {
              plain_text: vehicle.description,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
              },
            },
          );
        } catch (error) {
          throw 'Erro ao adicionar descrição';
        }

        return { status: response.status, url: response.data.permalink };
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        `${error?.response?.data?.cause[0].message ?? error.message}`,
        '',
        'VehicleService -> postAVehicleOnMercadoLivre',
      );
    }
  }

  async updateAVehicleOnMercadoLivre(vehicleId: string) {
    try {
      const accessToken = await this.adminService.getAuthMercadoLivre();

      const vehicle = await this.vehiclesRepository.findOne({
        where: {
          vehicleId: vehicleId,
        },
      });

      const mercadoLivreData = mountVehicleToMercadoLivreToEdit(vehicle);

      try {
        const response = await axios.put(
          `https://api.mercadolibre.com/items/${vehicle.itemId}`,
          mercadoLivreData,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/json',
            },
          },
        );
        return { status: response.status };
      } catch (error) {
        throw error;
      }
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        `Failed to fetch item: ${error.response.data.cause[0].message}`,
        '',
        'VehicleService -> updateAVehicleOnMercadoLivre',
      );
    }
  }

  async deleteAVehicleOnMercadoLivre(
    itemId: string,
    deleting: string,
    vehicleId: string,
  ) {
    try {
      const accessToken = await this.adminService.getAuthMercadoLivre();

      const vehicle = await this.vehiclesRepository.findOne({
        where: {
          vehicleId: vehicleId,
        },
      });

      if (!vehicle) {
        throw new ErrorDetailResponse(
          HttpStatus.NOT_FOUND,
          'Vehicle not found',
          '',
          'VehicleService -> deleteAVehicleOnMercadoLivre',
        );
      }
      if (deleting === 'all' || deleting === 'publish-only') {
        if (vehicle.published && vehicle.itemId) {
          await this.vehiclesRepository.update(vehicleId, {
            published: false,
            permalink: undefined,
            itemId: undefined,
          });
          await axios.put(
            `https://api.mercadolibre.com/items/${vehicle.itemId}`,
            { status: 'closed' },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            },
          );

          const responseDelete = await axios.put(
            `https://api.mercadolibre.com/items/${vehicle.itemId}`,
            { deleted: 'true' },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            },
          );

          console.log(responseDelete.data);
        }
      }
      if (deleting === 'car-only' || deleting === 'all') {
        await this.vehiclesRepository.delete(vehicle.vehicleId);
      }
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        'Failed to delete item',
        error.message,
        'VehicleService -> deleteAVehicleOnMercadoLivre',
      );
    }
  }

  async checkQuestions(vehicleId: string) {
    try {
      const vehicle = await this.vehiclesRepository.findOne({
        where: {
          vehicleId,
        },
      });

      const accessToken = await this.adminService.getAuthMercadoLivre();

      const response = await axios.get(
        `https://api.mercadolibre.com/questions/search?item_id=${vehicle.itemId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );
      const questions = response.data.questions;

      const sortedQuestions = questions.sort((a, b) => {
        const dateA: any = new Date(a.date_created);
        const dateB: any = new Date(b.date_created);
        return dateB - dateA;
      });

      const lastFiveQuestions = sortedQuestions.slice(0, 5).map((question) => ({
        questionId: question.id,
        status: question.status,
        text: question.text,
        answer: question?.answer?.text || undefined,
      }));

      return lastFiveQuestions;
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        'Failed to check item questions',
        error.message,
        'VehicleService -> checkQuestions',
      );
    }
  }

  async answerQuestion(answerDto: mlbAnswerQuestion) {
    try {
      const accessToken = await this.adminService.getAuthMercadoLivre();
      const response = await axios.post(
        'https://api.mercadolibre.com/answers',
        {
          question_id: answerDto.questionId,
          text: answerDto.answer,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response);
      return true;
    } catch (error) {
      throw new ErrorDetailResponse(
        HttpStatus.BAD_REQUEST,
        'Failed to answer item questions',
        error.message,
        'VehicleService -> answerQuestion',
      );
    }
  }
}
