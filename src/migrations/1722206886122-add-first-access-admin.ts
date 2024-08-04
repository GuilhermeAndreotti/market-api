import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddFirstAccessAdmin1722206886122 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'admin',
            new TableColumn({
                name: 'first_access',
                type: 'boolean',
                isNullable: true,
                default: false
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('admin', 'first_access');
    }

}
