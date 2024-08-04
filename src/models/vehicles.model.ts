import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'vehicles' })
export class Vehicle {
  @PrimaryGeneratedColumn('uuid', { name: 'vehicle_id' })
  vehicleId: string;

  @Column({ type: 'varchar', name: 'title' })
  title: string;

  @Column({ type: 'varchar', nullable: true })
  description: string;

  @Column({ type: 'int', precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({ nullable: true, name: 'contact_schedule' })
  contactSchedule: string;

  @Column({ nullable: true, name: 'item_id' })
  itemId?: string;

  @Column({ type: 'boolean', default: false, nullable: true })
  published: boolean;

  @Column({ type: 'varchar', nullable: true })
  image1: string;

  @Column({ type: 'varchar', nullable: true })
  image2: string;

  @Column({ type: 'varchar', nullable: true })
  image3: string;

  @Column({ type: 'varchar', nullable: true })
  image4: string;

  @Column({ type: 'varchar', nullable: true })
  brand: string;

  @Column({ type: 'varchar', nullable: true })
  model: string;

  @Column({ nullable: true, name: 'vehicle_year' })
  vehicleYear: string;

  @Column({ nullable: true, name: 'door_quantity' })
  doorQuantity: string;

  @Column({ nullable: true, name: 'fuel_type' })
  fuelType: string;

  @Column({ type: 'varchar', nullable: true })
  kilometers: string;

  @Column({ type: 'varchar', nullable: true })
  color: string;

  @Column({ type: 'varchar', nullable: true })
  steering: string;

  @Column({ type: 'varchar', nullable: true })
  transmission: string;

  @Column({ type: 'varchar', nullable: true, name: 'traction_control' })
  tractionControl: string;

  @Column({ type: 'varchar', nullable: true })
  armored: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_abs_brakes' })
  hasAbsBrakes: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_air_conditioning' })
  hasAirConditioning: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_alarm' })
  hasAlarm: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_alloy_wheels' })
  hasAlloyWheels: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_amfm_radio' })
  hasAmfmRadio: string;

  @Column({ type: 'varchar', nullable: true, name: 'permalink' })
  permalink: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_auxiliary_port' })
  hasAuxiliaryPort: string;

  @Column({ type: 'varchar', nullable: true, name: 'item_condition' })
  itemCondition: string;

  @Column({ type: 'varchar', nullable: true, name: 'license_plate' })
  licensePlate: string;

  @Column({ type: 'varchar', nullable: true, name: 'passenger_capacity' })
  passengerCapacity: string;

  @Column({ type: 'varchar', nullable: true })
  trim: string;

  @Column({ type: 'varchar', nullable: true, name: 'single_owner' })
  singleOwner: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_windscreen_wiper' })
  hasWindscreenWiper: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_usb' })
  hasUsb: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_steering_wheel_control' })
  hasSteeringWheelControl: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_power_door_locks' })
  hasPowerDoorLocks: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_power_windows' })
  hasPowerWindows: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_rain_sensor' })
  hasRainSensor: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_height_adjustable_driver_seat' })
  hasHeightAdjustableDriverSeat: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_rear_foglights' })
  hasRearFoglights: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_sliding_roof' })
  hasSlidingRoof: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_leather_upholstery' })
  hasLeatherUpholstery: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_light_on_reminder' })
  hasLightOnReminder: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_mp3_player' })
  hasMp3Player: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_onboard_computer' })
  hasOnboardComputer: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_parking_sensor' })
  hasParkingSensor: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_passenger_airbag' })
  hasPassengerAirbag: string;

  @Column({ type: 'varchar', nullable: true, name: 'vehicle_body_type' })
  vehicleBodyType: string;

  @Column({ type: 'varchar', nullable: true })
  height: string;

  @Column({ type: 'varchar', nullable: true })
  width: string;

  @Column({ type: 'varchar', nullable: true, name: 'distance_between_axes' })
  distanceBetweenAxes: string;

  @Column({ type: 'varchar', nullable: true, name: 'fuel_capacity' })
  fuelCapacity: string;

  @Column({ type: 'varchar', nullable: true })
  length: string;

  @Column({ type: 'varchar', nullable: true, name: 'valves_per_cylinder' })
  valvesPerCylinder: string;

  @Column({ type: 'varchar', nullable: true, name: 'gear_number' })
  gearNumber: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_curtain_airbag' })
  hasCurtainAirbag: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_fog_light' })
  hasFogLight: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_rear_folding_seat' })
  hasRearFoldingSeat: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_electric_mirrors' })
  hasElectricMirrors: string;

  @Column({ type: 'varchar', nullable: true, name: 'has_autopilot' })
  hasAutopilot: string;
}
