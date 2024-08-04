import { IsNumber, IsOptional, IsString, isNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateVehicleDto {
  @IsString({ message: 'The field "title" must be a string.' })
  @ApiProperty()
  @IsOptional()
  title?: string;

  @IsString({ message: 'The field "description" must be a string.' })
  @ApiProperty()
  @IsOptional()
  description?: string;

  @IsNumber()
  @ApiProperty()
  @IsOptional()
  price?: number;

  @IsString({ message: 'The field "image1" must be a string.' })
  @ApiProperty()
  @IsOptional()
  image1?: string;

  @IsString({ message: 'The field "image2" must be a string.' })
  @ApiProperty()
  @IsOptional()
  image2?: string;

  @IsString({ message: 'The field "image3" must be a string.' })
  @ApiProperty()
  @IsOptional()
  image3?: string;

  @IsString({ message: 'The field "image4" must be a string.' })
  @ApiProperty()
  @IsOptional()
  image4?: string;

  @IsString({ message: 'The field "brand" must be a string.' })
  @ApiProperty()
  @IsOptional()
  brand?: string;

  @IsString({ message: 'The field "model" must be a string.' })
  @ApiProperty()
  @IsOptional()
  model?: string;

  @IsString({ message: 'The field "vehicleYear" must be a string.' })
  @ApiProperty()
  @IsOptional()
  vehicleYear?: string;

  @IsString({ message: 'The field "doorQuantity" must be a string.' })
  @ApiProperty()
  @IsOptional()
  doorQuantity?: string;

  @IsString({ message: 'The field "fuelType" must be a string.' })
  @ApiProperty()
  @IsOptional()
  fuelType?: string;

  @IsString({ message: 'The field "kilometers" must be a string.' })
  @ApiProperty()
  @IsOptional()
  kilometers?: string;

  @IsString({ message: 'The field "color" must be a string.' })
  @ApiProperty()
  @IsOptional()
  color?: string;

  @IsString({ message: 'The field "steering" must be a string.' })
  @ApiProperty()
  @IsOptional()
  steering?: string;

  @IsString({ message: 'The field "transmission" must be a string.' })
  @ApiProperty()
  @IsOptional()
  transmission?: string;

  @IsString({ message: 'The field "tractionControl" must be a string.' })
  @ApiProperty()
  @IsOptional()
  tractionControl?: string;

  @IsString({ message: 'The field "armored" must be a string.' })
  @ApiProperty()
  @IsOptional()
  armored?: string;

  @IsString({ message: 'The field "hasAbsBrakes" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasAbsBrakes?: string;

  @IsString({ message: 'The field "hasAirConditioning" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasAirConditioning?: string;

  @IsString({ message: 'The field "hasAlarm" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasAlarm?: string;

  @IsString({ message: 'The field "hasAlloyWheels" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasAlloyWheels?: string;

  @IsString({ message: 'The field "hasAmfmRadio" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasAmfmRadio?: string;

  @IsString({ message: 'The field "hasAuxiliaryPort" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasAuxiliaryPort?: string;

  @IsString({ message: 'The field "itemCondition" must be a string.' })
  @ApiProperty()
  @IsOptional()
  itemCondition?: string;

  @IsString({ message: 'The field "licensePlate" must be a string.' })
  @ApiProperty()
  @IsOptional()
  licensePlate?: string;

  @IsString({ message: 'The field "passengerCapacity" must be a string.' })
  @ApiProperty()
  @IsOptional()
  passengerCapacity?: string;

  @IsString({ message: 'The field "trim" must be a string.' })
  @ApiProperty()
  @IsOptional()
  trim?: string;

  @IsString({ message: 'The field "singleOwner" must be a string.' })
  @ApiProperty()
  @IsOptional()
  singleOwner?: string;

  @IsString({ message: 'The field "hasWindscreenWiper" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasWindscreenWiper?: string;

  @IsString({ message: 'The field "hasUsb" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasUsb?: string;

  @IsString({ message: 'The field "hasSteeringWheelControl" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasSteeringWheelControl?: string;

  @IsString({ message: 'The field "hasPowerDoorLocks" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasPowerDoorLocks?: string;

  @IsString({ message: 'The field "hasPowerWindows" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasPowerWindows?: string;

  @IsString({ message: 'The field "hasRainSensor" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasRainSensor?: string;

  @IsString({ message: 'The field "hasHeightAdjustableDriverSeat" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasHeightAdjustableDriverSeat?: string;

  @IsString({ message: 'The field "hasRearFoglights" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasRearFoglights?: string;

  @IsString({ message: 'The field "hasSlidingRoof" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasSlidingRoof?: string;

  @IsString({ message: 'The field "hasLeatherUpholstery" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasLeatherUpholstery?: string;

  @IsString({ message: 'The field "hasLightOnReminder" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasLightOnReminder?: string;

  @IsString({ message: 'The field "hasMp3Player" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasMp3Player?: string;

  @IsString({ message: 'The field "hasOnboardComputer" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasOnboardComputer?: string;

  @IsString({ message: 'The field "hasParkingSensor" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasParkingSensor?: string;

  @IsString({ message: 'The field "hasPassengerAirbag" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasPassengerAirbag?: string;

  @IsString({ message: 'The field "vehicleBodyType" must be a string.' })
  @ApiProperty()
  @IsOptional()
  vehicleBodyType?: string;

  @IsString({ message: 'The field "height" must be a string.' })
  @ApiProperty()
  @IsOptional()
  height?: string;

  @IsString({ message: 'The field "width" must be a string.' })
  @ApiProperty()
  @IsOptional()
  width?: string;

  @IsString({ message: 'The field "distanceBetweenAxes" must be a string.' })
  @ApiProperty()
  @IsOptional()
  distanceBetweenAxes?: string;

  @IsString({ message: 'The field "fuelCapacity" must be a string.' })
  @ApiProperty()
  @IsOptional()
  fuelCapacity?: string;

  @IsString({ message: 'The field "length" must be a string.' })
  @ApiProperty()
  @IsOptional()
  length?: string;

  @IsString({ message: 'The field "valvesPerCylinder" must be a string.' })
  @ApiProperty()
  @IsOptional()
  valvesPerCylinder?: string;

  @IsString({ message: 'The field "gearNumber" must be a string.' })
  @ApiProperty()
  @IsOptional()
  gearNumber?: string;

  @IsString({ message: 'The field "hasCurtainAirbag" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasCurtainAirbag?: string;

  @IsString({ message: 'The field "hasFogLight" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasFogLight?: string;

  @IsString({ message: 'The field "hasRearFoldingSeat" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasRearFoldingSeat?: string;

  @IsString({ message: 'The field "hasElectricMirrors" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasElectricMirrors?: string;

  @IsString({ message: 'The field "hasAutopilot" must be a string.' })
  @ApiProperty()
  @IsOptional()
  hasAutopilot?: string;
}
