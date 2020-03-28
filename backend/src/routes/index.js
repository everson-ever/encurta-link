import express from 'express';
import LinkController from '../app/controllers/LinkController';
import UserController from '../app/controllers/UserController';

const routes = express.Router();

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.destroy);

routes.get('/links', LinkController.index);
routes.get('/links/:short', LinkController.show);
routes.post('/links', LinkController.store);
routes.delete('/links/:id', LinkController.destroy);

export default routes;
