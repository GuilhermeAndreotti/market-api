import { Injectable, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class MercadoLivre {

  // Com o CODE passado, pega o access token, que é usado para realizar todas as requisições
  // do mercado livre, sendo que cada token dura 6 horas.
  async getToken(code: string) {
    try {
      const response = await axios.post('https://api.mercadolibre.com/oauth/token', {
        grant_type: 'authorization_code',
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET,
        code: code,
        redirect_uri: process.env.REDIRECT_URI,
      });
      
      return response.data; // Retorna apenas o corpo da resposta
  
    } catch (error) {
      console.log(error)
      throw new Error(`Failed to fetch token: ${error.message}`);
    }
  }
  
}
