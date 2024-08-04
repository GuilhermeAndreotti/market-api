import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class DeleteVehicleDto {
  
  @IsString({ message: 'The field "vehicleId" must be a string.' })
  @ApiProperty()
  vehicleId: string;

}
