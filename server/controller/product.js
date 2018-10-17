import database from '../models/product';

const db = database;
// return all available products
// const getProducts = (req, res) => {
//   const products = db.getProducts();
//   res.status(200).json({
//     message: 'Success: Products in stock',
//     products,
//   });
// };

// return a specific product
const getSpecificProduct = (req, res) => {
  const id = parseInt(req.params.productId, 10);
  const product = db.getProduct(id);
  if (product === undefined || !product) {
    return res.status(404).json({
      error: `no product with id - ${id} found`,
    });
  }
  return res.status(200).json({
    message: 'Success! Product available',
    product,
  });
};

export default {
  // getProducts,
  getSpecificProduct,
};
