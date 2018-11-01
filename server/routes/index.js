import express from 'express';
import productController from '../controller/product';
import saleController from '../controller/sale';
import ProductValidator from '../middleware/ProdValidator';
import SaleValidator from '../middleware/SaleValidator';
import Users from '../database/controller/usersDb';
import productDb from '../database/controller/productdb';
import saleDb from '../database/controller/saleDb';
import Authenticate from '../database/middleware/verify';
import ValidateLogin from '../database/middleware/ValidateLogin';
import ValidateSignup from '../database/middleware/ValidateSignup';

const { addProductValidator } = ProductValidator;
const { addSaleValidator } = SaleValidator;

const { createUser, getAllUsers, logInUser } = Users;
const {
  createProduct, getAllProducts, getOneProduct, modifyProduct, deleteProduct,
} = productDb;
const { tokenVerify } = Authenticate;
const { checkLogin } = ValidateLogin;
const { checkSignup } = ValidateSignup;

const { createSale, getAllSaleRecords, getSaleRecord } = saleDb;

const route = express.Router();

route.get('/api/v1/products/:prodId', productController.getSingleProduct);
route.get('/api/v1/products', productController.getProducts);
route.post('/api/v1/products', addProductValidator, productController.createProduct);
route.get('/api/v1/sales/:saleId', saleController.getSingleRecord);
route.get('/api/v1/sales', saleController.getSales);
route.post('/api/v1/sales', addSaleValidator, saleController.createSale);

route.post('/api/v2/products', tokenVerify, addProductValidator, createProduct);
route.put('/api/v2/products/:prodId', tokenVerify, modifyProduct);
route.delete('/api/v2/products/:prodId', tokenVerify, deleteProduct);
route.get('/api/v2/products', tokenVerify, getAllProducts);
route.get('/api/v2/products/:prodId', tokenVerify, getOneProduct);

route.post('/auth/signup', checkSignup, createUser);
route.post('/auth/login', checkLogin, logInUser);
route.get('/auth/users', getAllUsers);

route.post('/api/v2/sales', tokenVerify, addSaleValidator, createSale);
route.get('/api/v2/sales', tokenVerify, getAllSaleRecords);
route.get('/api/v2/sales/:saleId', tokenVerify, getSaleRecord);

export default route;
