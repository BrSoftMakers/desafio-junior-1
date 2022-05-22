import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createPets1652921682031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "pets",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: 'select_cat',
                    type: "boolean"
                },
                {
                    name: "select_dog",
                    type: "boolean"
                },
                {
                    name: "pet_name",
                    type: "varchar"
                },
                {
                    name: "pet_age",
                    type: "int"
                },
                {
                    name: "pet_breed",
                    type: "varchar"
                },
                {
                    name: "owner_name",
                    type: "varchar"
                },
                {
                    name: "owner_phone",
                    type: "varchar"
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pets');
    }
}
