import pool from '../configDb';

const Product = {
  async createProduct(req, res) {
    const text = 'INSERT INTO products(product_name, product_category, price, quantity, minimum_stock, created_at) VALUES($1, $2, $3, $4, $5, Now()) returning *';
    const values = [
      req.body.product_name,
      req.body.product_category,
      req.body.price,
      req.body.quantity,
      req.body.minimum_stock,
    ];
    try {
      const { rows } = await pool.query(text, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getAllProducts(req, res) {
    const allProducts = 'SELECT * FROM products';

    try {
      const { rows, rowCount } = await pool.query(allProducts);

      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getOneProduct(req, res) {
    const text = 'SELECT * FROM products WHERE id = $1';

    try {
      const { rows } = await pool.query(text, [req.params.prodId]);

      if (!rows[0]) {
        return res.status(404).send({ message: 'product not found' });
      }

      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async modifyProduct(req, res) {
    const findProduct = 'SELECT * FROM products WHERE id=$1';

    const updateProduct = `UPDATE products

      SET product_name=$1, product_category=$2, price=$3, quantity=$4, minimum_stock=$5, updated_at=Now()

      WHERE id=$6  returning *`;

    try {
      const { rows } = await pool.query(findProduct, [req.params.prodId]);
      // console.log();
      if (!rows[0]) {
        return res.status(404).send({ message: 'product not found' });
      }

      const values = [

        req.body.product_name || rows[0].product_name,
        req.body.product_category || rows[0].product_category,
        req.body.price || rows[0].price,
        req.body.quantity || rows[0].quantity,
        req.body.minimum_stock || rows[0].minimum_stock,
        req.params.prodId,

      ];

      const response = await pool.query(updateProduct, values);

      return res.status(200).send(response.rows[0]);
    } catch (err) {
      return res.status(400).send(err);
    }
  },

  async deleteProduct(req, res) {
    const deleteQuery = 'DELETE FROM products WHERE id=$1';

    try {
      const { rows } = await pool.query(deleteQuery, [req.params.prodId]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'product not found' });
      }

      return res.status(204).send({ message: 'product deleted' });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
export default Product;
