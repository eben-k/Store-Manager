import express from 'express';
import productController from '../controller/product';
import saleController from '../controller/sale';
import ProductValidator from '../middleware/ProdValidator';
import SaleValidator from '../middleware/SaleValidator';

const { addProductValidator } = ProductValidator;
const { addSaleValidator } = SaleValidator;

const route = express.Router();

route.get('/api/v1/products/:prodId', productController.getSingleProduct);
route.get('/api/v1/products', productController.getProducts);
route.post('/api/v1/products', addProductValidator, productController.createProduct);
route.get('/api/v1/sales/:saleId', saleController.getSingleRecord);
route.get('/api/v1/sales', saleController.getSales);
route.post('/api/v1/sales', addSaleValidator, saleController.createSale);


export default route;
