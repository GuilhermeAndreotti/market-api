import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class UpdateAdminTable1717041747521 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'admin',
            new TableColumn({
                name: 'is_master',
                type: 'boolean',
                isNullable: true,
                default: false
            }),
        );
        await queryRunner.addColumn(
            'admin',
            new TableColumn({
                name: 'access_token',
                type: 'varchar',
                isNullable: true,
            }),
        );
        await queryRunner.addColumn(
            'admin',
            new TableColumn({
                name: 'access_code',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('admin', 'is_master');
        await queryRunner.dropColumn('admin', 'access_token');
        await queryRunner.dropColumn('admin', 'access_code');
    }

}
