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

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private vehiclesRepository: Repository<Vehicle>,
  ) {}

  async findAllVehicles(): Promise<Vehicle[]> {
    try {
      return await this.vehiclesRepository.find();
    } catch (error) {
      throw new Error(
        `Failed to fetch vehicles: ${error.message}`,
      );
    }
  }

  async findVehicleById(vehicleId: string): Promise<Vehicle> {
    try {
      return await this.vehiclesRepository.findOne({where: { vehicleId }});
    } catch (error) {
      throw new Error(
        `Failed to find vehicle with ID ${vehicleId}: ${error.message}`,
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
      throw new Error(
        `Failed to create vehicle: ${error.message}`,
      );
    }
  }

  public async updateVehicle(vehicleId: string, updateVehicleDto: CreateVehicleDto) {
    try {
      const vehicle = await this.vehiclesRepository.findOne({
        where: {
          vehicleId,
        },
      });

      const update = plainToInstance(Vehicle, updateVehicleDto);

      const { affected } = await this.vehiclesRepository.update(
        vehicleId,
        update,
      );

      return affected
        ? {
            code: HttpStatus.NO_CONTENT,
            message: 'Veículo atualizado.',
          }
        : {
            code: HttpStatus.NOT_FOUND,
            message: 'Não foi possível localizar o veículo para a atualização',
          };
    } catch (error) {
      if (error instanceof ErrorDetailResponse) {
        throw error;
      }

      const e = new ErrorDetailResponse(
        HttpStatus.EXPECTATION_FAILED,
        error.name,
        error.message,
        'Vehicle -> updateVehicle',
      );
      throw e;
    }
  }
  

  async deleteVehicle(vehicleId: string): Promise<{ status: number; message: string }> {
    try {
      const result = await this.vehiclesRepository.delete(vehicleId);
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
      throw new Error(
        `Failed to delete vehicle: ${error.message}`,
      );
    }
  }

  async getVehicle(itemId: string, accessToken: string) {
    try {
      const response = await axios.get(`https://api.mercadolibre.com/items/${itemId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch item: ${error.message}`);
    }
  }

  async postAVehicleOnMercadoLivre(vehicleId: string, accessToken: string) {
    try {
      const vehicleToPost = await this.vehiclesRepository.findOne({
          where: {
            vehicleId: vehicleId
          }
      })

      const mercadoLivreData = mountVehicleToMercadoLivre(vehicleToPost);
      
      const response = await axios.post(`https://api.mercadolibre.com/items`, mercadoLivreData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      return response.data;
    } catch (error) {
      console.log(error.response.data)
      console.log(error.response.data.cause)
      throw new Error(`Failed to fetch item: ${error.message}`);
    }
  }
  
  async deleteAVehicleOnMercadoLivre(itemId: string, accessToken: string) {
    try {
      const responseClose = await axios.put(
        `https://api.mercadolibre.com/items/${itemId}`,
        {
          status: 'closed'
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Status do item atualizado:', responseClose.data);
      
      const responseDelete = await axios.put(
        `https://api.mercadolibre.com/items/${itemId}`,
        {
          deleted: true
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }
      );

      console.log('Sua publicação foi deletada com sucesso.');

    } catch (error) {
      console.error('Erro ao atualizar o status do item:', error.response.data);
    }
  }

}
