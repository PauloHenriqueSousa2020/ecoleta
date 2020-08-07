// Arquivo responsável por criar as rotas da aplicação

import express, { response } from 'express'; // Importando as funcionalidades do Express

import multer from 'multer';
import multerConfig from './config/multer';

import PointsController from './controllers/PointControllers';
import ItemsController from './controllers/ItemsControllers';

const routes = express.Router(); // Atribuindo a variável routes as funcionalidades de Rotas do Express
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show); 

routes.post('/points', upload.single('image'),  pointsController.create);


export default routes; // Exportando as rotas para uso na aplicação 