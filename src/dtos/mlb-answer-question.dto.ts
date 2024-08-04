import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class mlbAnswerQuestion {
  @IsString({ message: 'The field "questionId" must be a string.' })
  @ApiProperty()
  questionId: string;

  @IsString({ message: 'The field "authorization" must be a string.' })
  @IsOptional()
  @ApiProperty()
  answer: string;
}
