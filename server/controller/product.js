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
export default {
  getProducts,
};
