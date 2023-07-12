import { Router } from 'express';
import { 
     List,
     GetOne, 
     //Create, 
     //Update, 
     //Delete 
} from '../controllers/StatusController.js';

const StatusRoutes = Router();

StatusRoutes.get('/List', List);

StatusRoutes.get('/GetOne', GetOne);

//StatusRoutes.post('/Create', Create);

//StatusRoutes.post('/Update', Update);

//StatusRoutes.post('/Delete', Delete);

export default StatusRoutes;