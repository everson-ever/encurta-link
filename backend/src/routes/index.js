import express from 'express';
import LinkController from '../app/controllers/LinkController';

const routes = express.Router();

routes.get('/links', LinkController.index);
routes.get('/links/:short', LinkController.show);
routes.post('/links', LinkController.store);
routes.delete('/links/:id', LinkController.destroy);

export default routes;
