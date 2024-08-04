import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
  @IsString({ message: 'The field "adminId" must be a string.' })
  @ApiProperty()
  adminId: string;

  @IsString({ message: 'The field "login" must be a string.' })
  @ApiProperty()
  login: string;

  @IsString({ message: 'The field "password" must be a string.' })
  @ApiProperty()
  @IsOptional()
  password?: string;

  @IsString({ message: 'The field "name" must be a string.' })
  @ApiProperty()
  name: string;

  @IsString({ message: 'The field "phone" must be a string.' })
  @ApiProperty()
  phone: string;

  @IsBoolean({ message: 'The field "canIntegrate" must be a boolean.' })
  @ApiProperty()
  canIntegrate: boolean;

  @IsBoolean({ message: 'The field "canCreateUsers" must be a boolean.' })
  @ApiProperty()
  canCreateUsers: boolean;
}
