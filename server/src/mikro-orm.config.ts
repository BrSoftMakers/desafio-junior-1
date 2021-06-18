import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from "./constants";
import path from 'path';
import { AnimalEstimacao } from './entities/AnimalEstimacao';

export default {
    migrations: {
        path: path.join(__dirname, "./migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [AnimalEstimacao],
    dbName: 'softmakers',
    user: 'postgres',
    password: '0123',
    //clientUrl: 'postgresql:postgresql://192.168.99.100:5433',
    //host: `'${process.env.DB_HOST}'`,
    //host: '192.168.99.100',
    //port: 5432,
    type: 'postgresql',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];