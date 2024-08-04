import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class mlbPostVehicle {
  
  @IsString({ message: 'The field "vehicleId" must be a string.' })
  @ApiProperty()
  vehicleId: string;

}
