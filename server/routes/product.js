import express from 'express';
import productController from '../controller/product';

const route = express.Router();

route.get('/products/:productId', productController.getSpecificProduct);

export default route;
