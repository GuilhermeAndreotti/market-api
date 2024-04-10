import { ErrorDetailResponse } from '@api-doc/errorDetail.response';
import { Controller, Get, HttpException, HttpStatus, Logger, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MercadoLivre } from './mercadolivre.service';

@Controller('/') 
@ApiTags('Integration')
export class MercadoLivreController {
  constructor(private readonly mercadoLivreService: MercadoLivre) {}

  @Post('oauth/token/:code')
  @ApiOperation({ summary: 'Get Mercado Livre token' })
  async getToken(@Param('code') code: string): Promise<any> {
    try {
      return await this.mercadoLivreService.getToken(code);
    } catch (error) {
      Logger.error(`${JSON.stringify(error)}`, 'MercadoLivre -> getToken');
      if (error instanceof ErrorDetailResponse) {
        throw new HttpException(error, +error.code);
      }
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
