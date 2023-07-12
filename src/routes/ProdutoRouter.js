import { Router } from 'express';
import { 
     List,
     GetOne, 
     //Create, 
     //Update, 
     //Delete 
} from '../controllers/ProdutoController';

const PodutoRoutes = Router();

PodutoRoutes.get('/List', List);

PodutoRoutes.get('/GetOne', GetOne);

//PodutoRoutes.post('/Create', Create);

//PodutoRoutes.post('/Update', Update);

//PodutoRoutes.post('/Delete', Delete);

export default PodutoRoutes;