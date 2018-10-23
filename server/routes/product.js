import express from 'express';
import productController from '../controller/product';

const route = express.Router();

route.get('/:productId', productController.getSpecificProduct);
route.get('/', productController.getProducts);
route.post('/', productController.createProduct);



export default route;
