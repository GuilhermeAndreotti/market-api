import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateVehiclesTable1710372164699 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'vehicles',
            columns: [
                {
                    name: 'vehicle_id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'price',
                    type: 'float8',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'image1',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'image2',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'image3',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'image4',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'brand',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'model',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'vehicle_year',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'door_quantity',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'fuel_type',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'kilometers',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'color',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'steering',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'traction_control',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'armored',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_abs_brakes',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_air_conditioning',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_alarm',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_alloy_wheels',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_amfm_radio',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_auxiliary_port',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'item_condition',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'license_plate',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'passenger_capacity',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'trim',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'single_owner',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_windscreen_wiper',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_usb',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_steering_wheel_control',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_power_door_locks',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_power_windows',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_rain_sensor',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_height_adjustable_driver_seat',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_rear_foglights',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_sliding_roof',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_leather_upholstery',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_light_on_reminder',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_mp3_player',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_onboard_computer',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_parking_sensor',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_passenger_airbag',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'transmission',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'vehicle_body_type',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'height',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'width',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'distance_between_axes',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'fuel_capacity',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'length',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'valves_per_cylinder',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'gear_number',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_curtain_airbag',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_fog_light',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_rear_folding_seat',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_electric_mirrors',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'has_autopilot',
                    type: 'varchar',
                    isNullable: true,
                }, 
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vehicles');
    }
}
