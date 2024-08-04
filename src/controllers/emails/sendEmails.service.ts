import { ErrorDetailResponse } from '@api-doc/errorDetail.response';
import { HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class SendEmailsService {

  public async sendWithParams(email: {
    sender: { name: string; email: string };
    to: [{ email: string }];
    params: any;
    templateId: number;
    subject?: string;
  }) {
    try {
      const url = process.env.SEND_IN_BLUE_URL;
      const apiKey = process.env.SEND_IN_BLUE_KEY;
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'api-key': apiKey,
      };

      return await axios.post(url, email, {
        headers,
      });
    } catch (error) {
      const e = new ErrorDetailResponse(
        HttpStatus.EXPECTATION_FAILED,
        'EMAIL_SENDING_ERROR',
        error?.message,
        'mailService -> sendWithParams',
      );

      throw e;
    }
  }
}
