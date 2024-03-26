import { ApiProperty } from '@nestjs/swagger';

export class ErrorDetailResponse {
  constructor(
    code?: number,
    message?: string,
    detailedMessage?: string,
    endPoint?: string,
  ) {
    this.code = code;
    this.message = message;
    this.detailedMessage = detailedMessage;
    this.endPoint = endPoint;
  }

  @ApiProperty()
  code: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  detailedMessage: string;

  @ApiProperty()
  endPoint: string;
}
