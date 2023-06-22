import dotenv from 'dotenv';

dotenv.config();

import './src/database'
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyparser from 'body-parser';

import homeRoutes from './src/routes/homeRoutes';
import petsRoutes from './src/routes/petsRoutes';

const whitelist = [
  'http://localhost:3000',
  '127.0.0.1:3000'
];

const corsOtions = {
  origin(origin, callback) {
    if (!whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.app.use(bodyparser.json());
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.app.use(cors(corsOtions));
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/pets', petsRoutes);
  }
}

export default new App().app;


