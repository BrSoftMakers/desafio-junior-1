import { Entity, PrimaryKey, Property, Enum } from "@mikro-orm/core";
//import { Field, Int, ObjectType } from "type-graphql";

//@ObjectType()
@Entity()
export class AnimalEstimacao {
    //@Field(() => Int)
    @PrimaryKey()
    id!: number;

    //@Field()
    @Property()
    nome!: string;

    //@Field()
    @Property()
    idade!: number;

    @Enum()
    tipo!: TipoAnimal;

    //@Field()
    @Property()
    raca!: string;

    //@Field()
    @Property()
    nomeDono!: string;

    //@Field()
    @Property()
    telefoneDono!: string;

    //@Field(() => String)
    @Property({ type: 'date'})
    createdAt = new Date();

    //@Field(() => String)
    @Property({ type: 'date', onUpdate: () => new Date() })
    updatedAt = new Date();
}

export const enum TipoAnimal {
    GATO,
    CACHORRO,
}