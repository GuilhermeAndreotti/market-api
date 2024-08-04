import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddContactSchedule1715040036492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'vehicles',
            new TableColumn({
                name: 'contact_schedule',
                type: 'varchar',
                isNullable: true,
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('vehicles', 'contact_schedule');
    }

}
