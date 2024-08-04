import { IsBoolean, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAdminDto {

  @IsString({ message: 'The field "login" must be a string.' })
  @ApiProperty()
  login: string;

  @IsString({ message: 'The field "password" must be a string.' })
  @ApiProperty()
  password: string;

}
