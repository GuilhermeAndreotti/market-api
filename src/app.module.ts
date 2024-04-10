
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';
import { Vehicle } from '@models/vehicles.model';
import { VehiclesController } from '@controllers/vehicles/vehicles.controller';
import { VehiclesService } from '@controllers/vehicles/vehicles.service';
import { MercadoLivreController } from '@controllers/integration/mercadolivre.controller';
import { MercadoLivre } from '@controllers/integration/mercadolivre.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([Vehicle]),
    
  ],
  controllers: [VehiclesController, MercadoLivreController],
  providers: [VehiclesService, MercadoLivre],
})
export class AppModule {}
