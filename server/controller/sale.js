import database from '../models/sale';

const db = database;
// post a new sale
const createSale = (req, res) => {
  // return error if a field is missing
  if (!req.body.name || !req.body.date || !req.body.quantity
    || !req.body.price || !req.body.total) {
    return res.status(400).json({
      error: 'missing field',
    });
  }
  // create new sale record
  const newSale = {
    name: req.body.prodName,
    date: req.body.saleDate,
    quantity: req.body.soldQuantity,
    price: req.body.unitPrice,
    total: req.body.total,
  };


  db.addSale(newSale.name, newSale.date,
    newSale.quantity, newSale.price, newSale.total);
  return res.status(200).json({
    message: 'Success! Sale recorded!',
    saleId: db.ids,
  });
};

// return all available sales records
const getSaleRecords = (req, res) => {
  const saleRecords = db.getSales();
  res.status(200).json({
    message: 'Success: Attendant Records',
    saleRecords,
  });
};


export default {
  getSaleRecords,
  createSale,
};
