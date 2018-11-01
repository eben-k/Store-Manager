import pool from '../configDb';


const Sales = {
  async createSale(req, res) {
    const text = 'INSERT INTO sales(attendant, product, quantity_sold, price, total, created_at) VALUES($1, $2, $3, $4, $5, Now())  returning *';

    const values = [
      req.body.attendant,
      req.body.product,
      req.body.quantity_sold,
      req.body.price,
      req.body.total,

    ];
    try {
      const { rows } = await pool.query(text, values);
      return res.status(201).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getAllSaleRecords(req, res) {
    const allSales = 'SELECT * FROM sales';

    try {
      const { rows, rowCount } = await pool.query(allSales);

      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getSaleRecord(req, res) {
    const text = 'SELECT * FROM sales WHERE id = $1';

    try {
      const { rows } = await pool.query(text, [req.params.saleId]);

      if (!rows[0]) {
        return res.status(404).send({ message: 'record not found' });
      }

      return res.status(200).send(rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },

  async deleteRecord(req, res) {
    const deleteQuery = 'DELETE FROM sales WHERE id=$1';

    try {
      const { rows } = await pool.query(deleteQuery, [req.params.saleId]);
      if (!rows[0]) {
        return res.status(404).send({ message: 'sale record not found' });
      }

      return res.status(204).send({ message: 'sale record deleted' });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
export default Sales;
