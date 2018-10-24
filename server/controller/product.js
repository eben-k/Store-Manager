import db from '../models/product';

const availableProducts = db;


// Get all products
const getProducts = (req, res) => {
  res.status(200).json({
    message: 'Success: Products in stock',
    products: availableProducts,
  });
};

// Get a single product
const getSingleProduct = (req, res) => {
  const id = Number(req.params.prodId);
  const availableProduct = availableProducts.find(product => product.prodId === id);
  if (availableProduct === undefined) {
    return res.status(404).json({
      message: `no product with id - ${id} found, Please enter a valid product Id`,
    });
  }
  return res.status(200).json({
    message: 'Success! Product available',
    availableProduct,
  });
};
const createProduct = (req, res) => {
  const newProduct = {
    prodId: availableProducts.length + 1,
    name: req.body.name,
    category: req.body.category,
    quantity: req.body.quantity,
    price: req.body.price,
  };
  if (
    !newProduct.name
    || !newProduct.category
    || !newProduct.quantity
    || !newProduct.price

  ) {
    return res.status(400).send({
      error: 'Error!! check missing fields',
    });
  }
  availableProducts.push(newProduct);
  return res.status(201).json({
    message: 'Success! Product added',
    newProduct,
  });
};
export default {
  createProduct,
  getProducts,
  getSingleProduct,
};
