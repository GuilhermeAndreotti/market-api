import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'vehicles' })
export class Vehicle {
  
  @PrimaryGeneratedColumn('uuid', { name: 'vehicle_id' })
  vehicleId: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  brand: string;

  @Column({ nullable: true })
  model: string;

  @Column({ nullable: true })
  year: number;

  @Column({ nullable: true })
  version: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  mileage: number;

  @Column({ name: 'license_plate', nullable: true })
  licensePlate: string;

  @Column({ nullable: true })
  color: string;

  @Column({ name: 'fuel_type', nullable: true })
  fuelType: string;

  @Column({ name: 'door_quantity', nullable: true })
  doorQuantity: number;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  condition: string;

  @Column({ name: 'engine_info', nullable: true })
  engineInfo: string;

  @Column({ nullable: true, type: 'text' })
  observations: string;

  @Column({ nullable: true })
  location: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  price: number;

  @Column({ nullable: true })
  image1: string;

  @Column({ nullable: true })
  image2: string;

  @Column({ nullable: true })
  image3: string;

  @Column({ nullable: true })
  image4: string;
}