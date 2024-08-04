import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EditAdminDto {

  @IsString({ message: 'The field "adminId" must be a string.' })
  @ApiProperty()
  adminId: string;
  
  @IsString({ message: 'The field "name" must be a string.' })
  @ApiProperty()
  @IsOptional()
  name?: string;

  @IsString({ message: 'The field "phone" must be a string.' })
  @ApiProperty()
  @IsOptional()
  phone?: string;

  @IsBoolean({ message: 'The field "canIntegrate" must be a boolean.' })
  @ApiProperty()
  @IsOptional()
  canIntegrate?: boolean;
}
