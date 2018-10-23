import express from 'express';
import saleController from '../controller/sale';

const route = express.Router();

route.post('/', saleController.createSale);
route.get('/', saleController.getSaleRecords);

export default route;
