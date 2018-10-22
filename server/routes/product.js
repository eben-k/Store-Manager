import express from 'express';
import productController from '../controller/product';

const route = express.Router();

route.get('/', productController.getProducts);

route.post('/', productController.createProduct);


export default route;
