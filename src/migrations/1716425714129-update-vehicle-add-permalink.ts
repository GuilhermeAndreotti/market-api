import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateVehicleAddPermalink1716425714129 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'vehicles',
            new TableColumn({
                name: 'permalink',
                type: 'varchar',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'vehicles',
            new TableColumn({
                name: 'item_id',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('vehicles', 'permalink');
        await queryRunner.dropColumn('vehicles', 'item_id');
    }

}
