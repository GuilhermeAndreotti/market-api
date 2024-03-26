
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';
import { Vehicle } from '@models/vehicles.model';
import { VehiclesController } from '@controllers/vehicles/vehicles.controller';
import { VehiclesService } from '@controllers/vehicles/vehicles.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([Vehicle]),
    
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService],
})
export class AppModule {}
