import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class mlbFindVehicle {
  
  @IsString({ message: 'The field "itemId" must be a string.' })
  @ApiProperty()
  itemId: string;

  @IsString({ message: 'The field "authorization" must be a string.' })
  @ApiProperty()
  authorization: string;

}
