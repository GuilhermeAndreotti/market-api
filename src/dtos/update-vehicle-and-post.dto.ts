import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class UpdateAndPostVehicle {
  @IsString({ message: 'The field "description" must be a string.' })
  @ApiProperty()
  description: string;

  @IsString({ message: 'The field "published" must be a string.' })
  @ApiPropertyOptional()
  published?: string;

}
