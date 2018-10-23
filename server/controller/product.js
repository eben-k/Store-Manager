import database from '../models/product';

const db = database;

// return all available products
const getProducts = (req, res) => {
  const products = db.getProducts();
  res.status(200).json({
    message: 'Success: Products in stock',
    products,
  });
};

// post a new product
const createProduct = (req, res) => {
  // return error if a field is missing
  if (!req.body.name || !req.body.category || !req.body.quantity
    || !req.body.price) {
    return res.status(400).json({
      error: 'check missing field',
    });
  }
  // create new product
  const newProduct = {
    name: req.body.prodName,
    category: req.body.prodCategory,
    quantity: req.body.stckQuantity,
    price: req.body.unitPrice,
  };


  db.addProduct(newProduct.name, newProduct.category,
    newProduct.quantity, newProduct.price);
  return res.status(200).json({
    message: 'Success! Product added',
    productId: db.ids,
  });
};
export default {
  createProduct,
  getProducts,
};
