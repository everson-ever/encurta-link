import cors from 'cors';
import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(express.json());
  }

  routes() {
    this.express.use('/api', routes);
  }
}

export default new App().express;
