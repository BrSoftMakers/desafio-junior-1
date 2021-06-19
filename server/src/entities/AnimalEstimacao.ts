import { Entity, PrimaryKey, Property, Enum } from "@mikro-orm/core";
import { Field, Int, ObjectType, registerEnumType } from "type-graphql";

@ObjectType()
@Entity()
export class AnimalEstimacao {
    @Field(() => Int)
    @PrimaryKey()
    id!: number;

    @Field(() => String)
    @Property()
    nome!: string;

    @Field(() => Int)
    @Property()
    idade!: number;

    @Field(() => TipoAnimal)
    @Enum()
    tipo!: TipoAnimal;

    @Field(() => String)
    @Property()
    raca!: string;

    @Field(() => String)
    @Property()
    nomeDono!: string;

    @Field(() => String)
    @Property()
    telefoneDono!: string;

    @Field(() => String)
    @Property({ type: 'date'})
    createdAt = new Date();

    @Field(() => String)
    @Property({ type: 'date', onUpdate: () => new Date() })
    updatedAt = new Date();
}

export enum TipoAnimal {
    GATO,
    CACHORRO,
}

registerEnumType(TipoAnimal, {
    name: "TipoAnimal",
});