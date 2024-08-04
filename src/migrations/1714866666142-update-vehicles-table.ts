import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateVehiclesTable1714866666142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'vehicles',
            new TableColumn({
                name: 'published',
                type: 'boolean',
                default: false,
                isNullable: false,
            }),
        );

        await queryRunner.changeColumn(
            'vehicles',
            'title',
            new TableColumn({
                name: 'title',
                type: 'varchar',
                isNullable: true,
            }),
        );

        await queryRunner.changeColumn(
            'vehicles',
            'price',
            new TableColumn({
                name: 'price',
                type: 'float8',
                isNullable: true,
            }),
        );

        await queryRunner.changeColumn(
            'vehicles',
            'description',
            new TableColumn({
                name: 'description',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('vehicles', 'published');

        await queryRunner.changeColumn(
            'vehicles',
            'title',
            new TableColumn({
                name: 'title',
                type: 'varchar',
                isNullable: false,
            }),
        );

        await queryRunner.changeColumn(
            'vehicles',
            'price',
            new TableColumn({
                name: 'price',
                type: 'float8',
                isNullable: false,
            }),
        );

        await queryRunner.changeColumn(
            'vehicles',
            'description',
            new TableColumn({
                name: 'description',
                type: 'varchar',
                isNullable: false,
            }),
        );
    }
}
