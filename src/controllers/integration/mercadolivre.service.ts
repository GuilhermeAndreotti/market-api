import { Admin } from '@models/admin.model';
import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { IsNull, Not, Repository } from 'typeorm';

@Injectable()
export class MercadoLivre {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {}

  async getToken(code: string) {
    try {
      const response = await axios.post(
        'https://api.mercadolibre.com/oauth/token',
        {
          grant_type: 'authorization_code',
          client_id: process.env.CLIENT_ID,
          client_secret: process.env.CLIENT_SECRET,
          code: code,
          redirect_uri: process.env.REDIRECT_URI,
        },
      );

      const admin = await this.adminRepository.findOne({
        where: { isMaster: true },
      });
      await this.adminRepository.update(admin.adminId, {
        accessToken: response.data.access_token,
        accessCode: response.data.refresh_token
      });

      return true;
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to fetch token: ${error.message}`);
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      const response = await axios.post(
        'https://api.mercadolibre.com/oauth/token',
        null,
        {
          headers: {
            accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
          },
          params: {
            grant_type: 'refresh_token',
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET,
            refresh_token: refreshToken,
          },
        },
      );

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(`Failed to fetch token: ${error.message}`);
    }
  }
}
