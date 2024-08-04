import { IsBoolean, IsNumber, IsOptional, IsString, isNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVehicleDto {
  @IsString({ message: 'The field "title" must be a string.' })
  @ApiProperty()
  title: string;

  @IsString({ message: 'The field "description" must be a string.' })
  @ApiProperty()
  description: string;

  @IsString({ message: 'The field "contactSchedule" must be a string.' })
  @ApiProperty()
  contactSchedule: string;

  @IsBoolean()
  @ApiProperty()
  @IsOptional()
  published?: boolean;

  @IsNumber()
  @ApiProperty()
  price: number;

  @ApiProperty()
  image1: string;

  @ApiProperty()
  image2: string;

  @ApiPropertyOptional()
  @IsOptional()
  image3?: string;

  @ApiPropertyOptional()
  @IsOptional()
  image4?: string;

  @IsString({ message: 'The field "brand" must be a string.' })
  @ApiProperty()
  brand: string;

  @IsString({ message: 'The field "model" must be a string.' })
  @ApiProperty()
  model: string;

  @IsString({ message: 'The field "vehicleYear" must be a string.' })
  @ApiProperty()
  vehicleYear: string;

  @IsString({ message: 'The field "doorQuantity" must be a string.' })
  @ApiProperty()
  doorQuantity: string;

  @IsString({ message: 'The field "fuelType" must be a string.' })
  @ApiProperty()
  fuelType: string;

  @IsString({ message: 'The field "kilometers" must be a string.' })
  @ApiProperty()
  kilometers: string;

  @IsString({ message: 'The field "color" must be a string.' })
  @ApiProperty()
  color: string;

  @IsString({ message: 'The field "steering" must be a string.' })
  @ApiProperty()
  steering: string;

  @IsString({ message: 'The field "transmission" must be a string.' })
  @ApiProperty()
  transmission: string;

  @IsString({ message: 'The field "tractionControl" must be a string.' })
  @ApiProperty()
  tractionControl: string;

  @IsString({ message: 'The field "armored" must be a string.' })
  @ApiProperty()
  armored: string;

  @IsString({ message: 'The field "hasAbsBrakes" must be a string.' })
  @ApiProperty()
  hasAbsBrakes: string;

  @IsString({ message: 'The field "hasAirConditioning" must be a string.' })
  @ApiProperty()
  hasAirConditioning: string;

  @IsString({ message: 'The field "hasAlarm" must be a string.' })
  @ApiProperty()
  hasAlarm: string;

  @IsString({ message: 'The field "hasAlloyWheels" must be a string.' })
  @ApiProperty()
  hasAlloyWheels: string;

  @IsString({ message: 'The field "hasAmfmRadio" must be a string.' })
  @ApiProperty()
  hasAmfmRadio: string;

  @IsString({ message: 'The field "hasAuxiliaryPort" must be a string.' })
  @ApiProperty()
  hasAuxiliaryPort: string;

  @IsString({ message: 'The field "itemCondition" must be a string.' })
  @ApiProperty()
  itemCondition: string;

  @IsString({ message: 'The field "licensePlate" must be a string.' })
  @ApiProperty()
  licensePlate: string;

  @IsString({ message: 'The field "passengerCapacity" must be a string.' })
  @ApiProperty()
  passengerCapacity: string;

  @IsString({ message: 'The field "trim" must be a string.' })
  @ApiProperty()
  trim: string;

  @IsString({ message: 'The field "singleOwner" must be a string.' })
  @ApiProperty()
  singleOwner: string;

  @IsString({ message: 'The field "hasWindscreenWiper" must be a string.' })
  @ApiProperty()
  hasWindscreenWiper: string;

  @IsString({ message: 'The field "hasUsb" must be a string.' })
  @ApiProperty()
  hasUsb: string;

  @IsString({ message: 'The field "hasSteeringWheelControl" must be a string.' })
  @ApiProperty()
  hasSteeringWheelControl: string;

  @IsString({ message: 'The field "hasPowerDoorLocks" must be a string.' })
  @ApiProperty()
  hasPowerDoorLocks: string;

  @IsString({ message: 'The field "hasPowerWindows" must be a string.' })
  @ApiProperty()
  hasPowerWindows: string;

  @IsString({ message: 'The field "hasRainSensor" must be a string.' })
  @ApiProperty()
  hasRainSensor: string;

  @IsString({ message: 'The field "hasHeightAdjustableDriverSeat" must be a string.' })
  @ApiProperty()
  hasHeightAdjustableDriverSeat: string;

  @IsString({ message: 'The field "hasRearFoglights" must be a string.' })
  @ApiProperty()
  hasRearFoglights: string;

  @IsString({ message: 'The field "hasSlidingRoof" must be a string.' })
  @ApiProperty()
  hasSlidingRoof: string;

  @IsString({ message: 'The field "hasLeatherUpholstery" must be a string.' })
  @ApiProperty()
  hasLeatherUpholstery: string;

  @IsString({ message: 'The field "hasLightOnReminder" must be a string.' })
  @ApiProperty()
  hasLightOnReminder: string;

  @IsString({ message: 'The field "hasMp3Player" must be a string.' })
  @ApiProperty()
  hasMp3Player: string;

  @IsString({ message: 'The field "hasOnboardComputer" must be a string.' })
  @ApiProperty()
  hasOnboardComputer: string;

  @IsString({ message: 'The field "hasParkingSensor" must be a string.' })
  @ApiProperty()
  hasParkingSensor: string;

  @IsString({ message: 'The field "hasPassengerAirbag" must be a string.' })
  @ApiProperty()
  hasPassengerAirbag: string;

  @IsString({ message: 'The field "vehicleBodyType" must be a string.' })
  @ApiProperty()
  vehicleBodyType: string;

  @IsString({ message: 'The field "height" must be a string.' })
  @ApiProperty()
  height: string;

  @IsString({ message: 'The field "width" must be a string.' })
  @ApiProperty()
  width: string;

  @IsString({ message: 'The field "distanceBetweenAxes" must be a string.' })
  @ApiProperty()
  distanceBetweenAxes: string;

  @IsString({ message: 'The field "fuelCapacity" must be a string.' })
  @ApiProperty()
  fuelCapacity: string;

  @IsString({ message: 'The field "length" must be a string.' })
  @ApiProperty()
  length: string;

  @IsString({ message: 'The field "valvesPerCylinder" must be a string.' })
  @ApiProperty()
  valvesPerCylinder: string;

  @IsString({ message: 'The field "gearNumber" must be a string.' })
  @ApiProperty()
  gearNumber: string;

  @IsString({ message: 'The field "hasCurtainAirbag" must be a string.' })
  @ApiProperty()
  hasCurtainAirbag: string;

  @IsString({ message: 'The field "hasFogLight" must be a string.' })
  @ApiProperty()
  hasFogLight: string;

  @IsString({ message: 'The field "hasRearFoldingSeat" must be a string.' })
  @ApiProperty()
  hasRearFoldingSeat: string;

  @IsString({ message: 'The field "hasElectricMirrors" must be a string.' })
  @ApiProperty()
  hasElectricMirrors: string;

  @IsString({ message: 'The field "hasAutopilot" must be a string.' })
  @ApiProperty()
  hasAutopilot: string;
}
