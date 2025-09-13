import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAdmin1757766430883 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      insert into "admin" (
        "admin_id",
        "login",
        "password",
        "name",
        "phone",
        "can_integrate",
        "can_create_users",
        "is_master"
      ) VALUES (
        '4ab2601e-34fa-4718-beda-1f788077c9f2',
        'master',
        '$2a$10$t0FItEyYvIiw/b9WOOvw4O8.RodZE3Z0/7yAfGQgM3aWISO7/6z8e',
        'Master Admin',
        '18997133926',
        true,
        true,
        true
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `delete from "admin" where "admin_id" = '4ab2601e-34fa-4718-beda-1f788077c9f2';`,
    );
  }
}
