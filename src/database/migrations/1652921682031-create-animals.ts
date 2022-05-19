import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createAnimals1652921682031 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "animals",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true
                },
                {
                    name: "dog_name",
                    type: "varchar"
                },
                {
                    name: "dog_age",
                    type: "int"
                },
                {
                    name: "dog_breed",
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
        await queryRunner.dropTable('animals');
    }
}
