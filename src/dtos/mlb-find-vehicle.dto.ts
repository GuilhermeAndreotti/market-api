import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class mlbFindVehicle {
  
  @IsString({ message: 'The field "itemId" must be a string.' })
  @ApiProperty()
  itemId?: string;

  @IsString({ message: 'The field "authorization" must be a string.' })
  @IsOptional()
  @ApiProperty()
  vehicleId?: string;

  @IsString({ message: 'The field "deleting" must be a string.' })
  @IsOptional()
  @ApiProperty()
  deleting?: string;

}
