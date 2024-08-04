import { ErrorDetailResponse } from '@api-doc/errorDetail.response';
import { Admin } from '@models/admin.model';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AdminService } from './admin.service';
import { LoginAdminDto } from '@dtos/login-admin.dto';
import { CreateAdminDto } from '@dtos/create-admin.dto';
import { NewAdminPassword } from '@dtos/new-password.dto';
import { EditAdminDto } from '@dtos/edit-admin.dto';

@Controller('admin')
@ApiTags('Administradores')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/find-by-id/:adminId')
  @ApiOperation({ summary: 'Get admin by its id' })
  async findById(@Param('adminId', ParseUUIDPipe) adminId: string,): Promise<Admin> {
    try {
      return await this.adminService.findAdminById(adminId);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Admin -> findAll');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all admins' })
  async findAll(): Promise<Admin[]> {
    try {
      return await this.adminService.findAllAdmins();
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Admin -> findAll');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('check-token')
  @ApiOperation({ summary: 'Check MLB current connection status' })
  async getStatus(): Promise<any> {
    try {
      return await this.adminService.checkToken();
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Admin -> getTokenToUse');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  @ApiOperation({ summary: 'login' })
  async login(@Body() login: LoginAdminDto): Promise<Admin> {
    try {
      return await this.adminService.login(login);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Admin -> login');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('register')
  @ApiOperation({ summary: 'Cadastra um adm' })
  async register(@Body() adm: CreateAdminDto): Promise<Admin> {
    try {
      return await this.adminService.createAdmin(adm);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Admin -> register');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('edit-admin')
  @ApiOperation({ summary: 'Edita um admin' })
  async edit(@Body() edit: EditAdminDto): Promise<{status: number, response: boolean}> {
    try {
      return await this.adminService.editAdmin(edit);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Admin -> edit');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('new-password')
  @ApiOperation({ summary: 'Altera a senha no primeiro acesso' })
  async changePassword(@Body() newPass: NewAdminPassword): Promise<{status: number, response: boolean}> {
    try {
      return await this.adminService.setNewPassword(newPass);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Admin -> changePassword');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get('remove-connection')
  @ApiOperation({ summary: 'Remove integration with Mercado Livre' })
  async removeConnection(): Promise<any> {
    try {
      return await this.adminService.removeConnectionWithMlb();
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Admin -> removeConnection');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':adminId')
  @ApiOperation({ summary: 'Delete a vehicle by ID' })
  @ApiParam({ name: 'adminId', description: 'id do adm para deletar' })
  async remove(
    @Param('adminId') adminId: string,
  ): Promise<{ status: number; message: string }> {
    try {
      return await this.adminService.delete(adminId);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'Admin -> remove');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }



}
