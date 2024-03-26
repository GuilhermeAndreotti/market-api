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
                    name: 'name',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'category',
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
                    name: 'year',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'version',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'mileage',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                    isNullable: true,
                },
                {
                    name: 'license_plate',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'color',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'fuel_type',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'door_quantity',
                    type: 'int',
                    isNullable: true,
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'condition',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'engine_info',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'observations',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'location',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'price',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                    isNullable: true,
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
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('vehicles');
    }
}
