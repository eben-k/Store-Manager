import express from 'express';
import productController from '../controller/product';

const route = express.Router();

route.get('/', productController.getProducts);

export default route;
