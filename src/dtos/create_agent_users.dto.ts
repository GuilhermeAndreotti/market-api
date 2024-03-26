import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsNumber, IsDecimal } from 'class-validator';

export class CreateVehicleDto {
  
  @IsString({ message: 'The field "name" must be a string.' })
  @ApiProperty()
  name: string;

  @IsString({ message: 'The field "category" must be a string.' })
  @ApiProperty()
  category: string;

  @IsString({ message: 'The field "brand" must be a string.' })
  @ApiProperty()
  brand: string;

  @IsString({ message: 'The field "model" must be a string.' })
  @ApiProperty()
  model: string;

  @IsNumber({}, { message: 'The field "year" must be a number.' })
  @ApiProperty()
  year: number;

  @IsString({ message: 'The field "version" must be a string.' })
  @ApiProperty()
  version: string;

  @IsDecimal({ decimal_digits: '2' }, { message: 'The field "mileage" must be a decimal number.' })
  @IsNumber()
  @ApiProperty()
  mileage: number;

  @IsString({ message: 'The field "licensePlate" must be a string.' })
  @ApiProperty()
  licensePlate: string;

  @IsString({ message: 'The field "color" must be a string.' })
  @ApiProperty()
  color: string;

  @IsString({ message: 'The field "fuelType" must be a string.' })
  @ApiProperty()
  fuelType: string;

  @IsNumber({}, { message: 'The field "doorQuantity" must be a number.' })
  @ApiProperty()
  doorQuantity: number;

  @IsString({ message: 'The field "description" must be a string.' })
  @ApiProperty()
  description: string;

  @IsString({ message: 'The field "condition" must be a string.' })
  @ApiProperty()
  condition: string;

  @IsString({ message: 'The field "engineInfo" must be a string.' })
  @ApiProperty()
  engineInfo: string;

  @IsString({ message: 'The field "observations" must be a string.' })
  @IsOptional()
  observations: string;

  @IsString({ message: 'The field "location" must be a string.' })
  @ApiProperty()
  location: string;

  @IsDecimal({ decimal_digits: '2' }, { message: 'The field "price" must be a decimal number.' })
  @ApiProperty()
  price: number;

  @IsString({ message: 'The field "image1" must be a string.' })
  @ApiProperty()
  image1: string;

  @IsString({ message: 'The field "image2" must be a string.' })
  @ApiProperty()
  @IsOptional()
  image2: string;

  @IsString({ message: 'The field "image3" must be a string.' })
  @IsOptional()
  @ApiProperty()
  image3: string;

  @IsString({ message: 'The field "image4" must be a string.' })
  @IsOptional()
  @ApiProperty()
  image4: string;
}
