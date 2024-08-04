import { SendEmailsService } from '@controllers/emails/sendEmails.service';
import { CreateAdminDto } from '@dtos/create-admin.dto';
import { EditAdminDto } from '@dtos/edit-admin.dto';
import { LoginAdminDto } from '@dtos/login-admin.dto';
import { NewAdminPassword } from '@dtos/new-password.dto';
import { Admin } from '@models/admin.model';
import { HttpStatus, Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import * as bcrypt from 'bcrypt';
import { generateRandomSequence } from 'src/util/generatePassword.util';
import { IsNull, Not, Repository } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    private readonly send: SendEmailsService,
  ) {}

  async findAllAdmins(): Promise<Admin[]> {
    try {
      const admins = await this.adminRepository.find({
        select: ['adminId', 'name', 'phone', 'canIntegrate', 'isMaster'],
      });

      const filteredAdms: Admin[] = admins.filter(
        (admin) => !admin.isMaster,
      );

      return filteredAdms;
    } catch (error) {
      throw new Error(`Failed to fetch admins: ${error.message}`);
    }
  }

  async findAdminById(adminId: string): Promise<Admin> {
    try {
      const admin = await this.adminRepository.findOne({ where: { adminId } });
      delete admin.password;
      return admin;
    } catch (error) {
      throw new Error(
        `Failed to find admin with ID ${adminId}: ${error.message}`,
      );
    }
  }

  async login(login: LoginAdminDto): Promise<Admin> {
    try {
      const adm = await this.adminRepository.findOne({
        where: { login: login.login },
      });

      if (!adm) {
        throw new Error('Admin não encontrado');
      }

      const passwordMatch = await bcrypt.compare(login.password, adm.password);

      if (!passwordMatch) {
        throw new Error('Senha inválida');
      }

      return adm;
    } catch (error) {
      throw new Error(`Erro ao fazer login: ${error.message}`);
    }
  }

  async createAdmin(createAdminDto: CreateAdminDto): Promise<Admin> {
    try {
      const password = generateRandomSequence();
      const hashedPassword = await bcrypt.hash(password, 10);

      const newAdmin = this.adminRepository.create({
        ...createAdminDto,
        password: hashedPassword,
        canCreateUsers: false,
        firstAccess: true,
      });

      newAdmin.adminId = uuidV4();

      const resu = await this.adminRepository.save(newAdmin);

      if (createAdminDto.login) {
        await this.send.sendWithParams({
          sender: {
            email: process.env.SEND_IN_BLUE_SENDER,
            name: 'Car Market',
          },
          params: {
            name: newAdmin?.name || 'Cliente',
            login: newAdmin.login,
            password: password,
            redirect: `${process.env.FRONT_END_URL}`,
          },
          templateId: 2,
          to: [{ email: createAdminDto.login }],
        });
      }

      return resu;
    } catch (error) {
      throw new Error(`Failed to create admin: ${error.message}`);
    }
  }

  async setNewPassword(
    newPassword: NewAdminPassword,
  ): Promise<{ status: number; response: boolean }> {
    try {
      const admin = await this.adminRepository.findOne({
        where: { adminId: newPassword.adminId },
      });

      const hashedPassword = await bcrypt.hash(newPassword.password, 10);

      await this.adminRepository.update(admin.adminId, {
        password: hashedPassword,
        firstAccess: false,
      });

      return { status: 200, response: true };
    } catch (error) {
      throw new Error(`Failed to create admin: ${error.message}`);
    }
  }

  async editAdmin(
    editDto: EditAdminDto,
  ): Promise<{ status: number; response: boolean }> {
    try {
      const admin = await this.adminRepository.findOne({
        where: { adminId:editDto.adminId },
      });

      await this.adminRepository.update(admin.adminId, {
        ...editDto
      });

      return { status: 200, response: true };
    } catch (error) {
      throw new Error(`Failed to create admin: ${error.message}`);
    }
  }

  async delete(
    adminId: string,
  ): Promise<{ status: number; message: string }> {
    try {

      const result = await this.adminRepository.delete(adminId);

      if (result.affected > 0) {
        return {
          status: HttpStatus.OK,
          message: 'Admin deleted successfully.',
        };
      } else {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Failed to delete admin.',
        };
      }

    } catch (error) {
      throw new Error(`Failed to delete admin: ${error.message}`);
    }
  }

  async checkToken() {
    try {
      const admin = await this.adminRepository.findOne({
        where: {
          isMaster: true,
          accessCode: Not(IsNull()),
          accessToken: Not(IsNull()),
        },
      });
      if (admin) {
        return { status: 200, response: true };
      } else {
        return { status: 404, response: false };
      }
    } catch (error) {
      throw new Error(`Failed to check token: ${error.message}`);
    }
  }

  async getAuthMercadoLivre() {
    try {
      const admin = await this.adminRepository.findOne({
        where: {
          isMaster: true,
          accessCode: Not(IsNull()),
          accessToken: Not(IsNull()),
        },
      });
      if (admin) {
        return admin.accessToken;
      }
    } catch (error) {
      throw new Error(`Failed to get token to use: ${error.message}`);
    }
  }

  async removeConnectionWithMlb() {
    try {
      const admin = await this.adminRepository.findOne({
        where: {
          isMaster: true,
          accessCode: Not(IsNull()),
          accessToken: Not(IsNull()),
        },
      });
      if (admin) {
        await this.adminRepository.update(admin.adminId, {
          accessToken: null,
          accessCode: null,
        });
        return { status: 200, response: true };
      }
      return { status: 400, response: false };
    } catch (error) {
      throw new Error(`Failed to get token to use: ${error.message}`);
    }
  }

  // Refresh token - Busca o admin master (unico) e salva o token
  @Cron(CronExpression.EVERY_4_HOURS)
  async refreshMercadoLivreToken() {
    try {
      const admin = await this.adminRepository.findOne({
        where: {
          isMaster: true,
          accessCode: Not(IsNull()),
          accessToken: Not(IsNull()),
        },
      });

      if (admin.accessToken) {
        const response = await axios.post(
          'https://api.mercadolibre.com/oauth/token',
          {
            grant_type: 'refresh_token',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            refresh_token: admin.accessCode,
          },
        );

        await this.adminRepository.update(admin.adminId, {
          accessToken: response.data.access_token,
          accessCode: response.data.refresh_token,
        });
      }
      return true;
    } catch (error) {
      throw new Error(`Failed to get refresh token: ${error.message}`);
    }
  }
}
