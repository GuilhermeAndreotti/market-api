import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NewAdminPassword {
  @IsString({ message: 'The field "adminId" must be a string.' })
  @ApiProperty()
  adminId: string;

  @IsString({ message: 'The field "password" must be a string.' })
  @ApiProperty()
  password: string;
}
