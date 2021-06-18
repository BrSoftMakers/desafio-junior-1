import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import microConfig from './mikro-orm.config';
import { AnimalEstimacao, TipoAnimal } from './entities/AnimalEstimacao';
//import express from 'express';
//import { ApolloServer } from "apollo-server-express";
//import { buildSchema } from "type-graphql";
//import { AnimalEstimacaoResolver } from './resolvers/animalEstimacao';

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();

    /*const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [AnimalEstimacaoResolver],
            validate: false,
        }),
        context: () => ({ em: orm.em })
    });
    apolloServer.applyMiddleware({ app });
    app.listen(8080, () => {
        console.log('server started on localhost:8080');
    });*/

    const animalEstimacao = orm.em.create(AnimalEstimacao, {
        id: 1,
        nome: 'pet',
        idade: 7,
        tipo: TipoAnimal.GATO,
        raca: 'Siames',
        nomeDono: 'caio',
        telefoneDono: '45667'
    });
    await orm.em.persistAndFlush(animalEstimacao);

    /*const animaisEstimacao = await orm.em.find(AnimalEstimacao, {});
    console.log(animaisEstimacao);*/

};

main().catch((err) => {
    console.error(err);
});