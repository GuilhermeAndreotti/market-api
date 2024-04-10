import { Controller, Get, HttpException, HttpStatus, Logger, Post, Body, Param, Delete, Headers } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam, ApiBody } from '@nestjs/swagger';
import { ErrorDetailResponse } from '@api-doc/errorDetail.response';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from '@dtos/create-vehicle.dto';
import { Vehicle } from '@models/vehicles.model';
import { mlbFindVehicle } from '@dtos/mlb-find-vehicle.dto';
import { mlbPostVehicle } from '@dtos/mlb-post-vehicle';

@Controller('vehicles')
@ApiTags('Vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all vehicles' })
  async findAll(): Promise<Vehicle[]> {
    try {
      return await this.vehiclesService.findAllVehicles();
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Vehicles -> findAll');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vehicle by ID' })
  @ApiParam({ name: 'id', description: 'Vehicle ID' })
  async findOne(@Param('id') id: string): Promise<Vehicle> {
    try {
      return await this.vehiclesService.findVehicleById(id);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Vehicles -> findOne');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create a new vehicle' })
  @ApiBody({ type: CreateVehicleDto })
  async create(@Body() createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    try {
      return await this.vehiclesService.createVehicle(createVehicleDto);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Vehicles -> create');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a vehicle by ID' })
  @ApiParam({ name: 'id', description: 'Vehicle ID' })
  async remove(@Param('id') id: string): Promise<{ status: number; message: string }> {
    try {
      return await this.vehiclesService.deleteVehicle(id);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Vehicles -> remove');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('items/:itemId')
  @ApiOperation({ summary: 'Find a vehicle on Mercado Livre' })
  async getVehicleInformationFromMercadoLivre(@Body() mlbFindVehicle: mlbFindVehicle): Promise<any> {
    try {
      return await this.vehiclesService.getVehicle(mlbFindVehicle.itemId, mlbFindVehicle.authorization);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Vehicles -> getVehicleInformationFromMercadoLivre');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('items')
  @ApiOperation({ summary: 'Publish a vehicle on Mercado Livre' })
  async publishVehicleOnMercadoLivre(@Body() mlbFindVehicle: mlbPostVehicle): Promise<any> {
    try {
      return await this.vehiclesService.postAVehicleOnMercadoLivre(mlbFindVehicle.vehicleId, mlbFindVehicle.authorization);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Vehicles -> publishVehicleOnMercadoLivre');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }


}
