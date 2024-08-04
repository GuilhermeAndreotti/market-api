import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePublicationTable1722789423716 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'admin',
            columns: [
                {
                    name: 'publication_id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'price',
                    type: 'float8',
                    isNullable: true,
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'contactSchedule',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'published',
                    type: 'boolean',
                    default: false,
                    isNullable: false,
                },

            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('admin');
    }

}
