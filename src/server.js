import express, { json } from 'express';
import cors from 'cors';
import 'dotenv/config'

import StatusRoutes from './routes/StatusRouter.js';
//import PodutoRoutes from './routes/ProdutoRouter';

const api = express();

api.use(cors());
api.use(json());
api.use(StatusRoutes);
//api.use(PodutoRoutes);


api.listen(process.env.PORT);