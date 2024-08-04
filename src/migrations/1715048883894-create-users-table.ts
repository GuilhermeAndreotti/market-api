import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1715048883894 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'admin',
            columns: [
                {
                    name: 'admin_id',
                    type: 'uuid',
                    isPrimary: true,
                },
                {
                    name: 'login',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'password',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'name',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    isNullable: true,
                },
                {
                    name: 'can_integrate',
                    type: 'boolean',
                    isNullable: true,
                },
                {
                    name: 'can_create_users',
                    type: 'boolean',
                    isNullable: true,
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('admin');
    }
}
