import express from 'express';
import saleController from '../controller/sale';

const route = express.Router();

route.get('/:employeeId', saleController.getSpecificRecord);

export default route;
