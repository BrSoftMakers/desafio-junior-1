import { Migration } from '@mikro-orm/migrations';

export class Migration20210619013332 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "animal_estimacao" ("id" serial primary key, "nome" varchar(255) not null, "idade" int4 not null, "tipo" int2 not null, "raca" varchar(255) not null, "nome_dono" varchar(255) not null, "telefone_dono" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
  }

}
