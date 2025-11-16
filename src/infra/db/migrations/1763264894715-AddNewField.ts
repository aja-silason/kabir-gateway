import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNewField1763264894715 implements MigrationInterface {
    name = 'AddNewField1763264894715'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loggs" ADD "method" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "loggs" DROP COLUMN "method"`);
    }

}
