
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './data-source';
import { Vehicle } from '@models/vehicles.model';
import { VehiclesController } from '@controllers/vehicles/vehicles.controller';
import { VehiclesService } from '@controllers/vehicles/vehicles.service';
import { MercadoLivreController } from '@controllers/integration/mercadolivre.controller';
import { MercadoLivre } from '@controllers/integration/mercadolivre.service';
import { AdminController } from '@controllers/admin/admin.controller';
import { AdminService } from '@controllers/admin/admin.service';
import { Admin } from '@models/admin.model';
import { ScheduleModule } from '@nestjs/schedule';
import { SendEmailsService } from '@controllers/emails/sendEmails.service';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([Vehicle, Admin]),
    ScheduleModule.forRoot()
    
  ],
  controllers: [VehiclesController, MercadoLivreController, AdminController],
  providers: [VehiclesService, MercadoLivre, AdminService, SendEmailsService],
})
export class AppModule {}
