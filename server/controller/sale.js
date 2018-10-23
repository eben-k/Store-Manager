import database from '../models/sale';

const db = database;


// return a specific product
const getSpecificRecord = (req, res) => {
  const id = parseInt(req.params.employeeId, 10);
  const record = db.getAttendant(id);
  if (record === undefined || !record) {
    return res.status(404).json({
      error: `attendant with id - ${id} not found`,
    });
  }
  return res.status(200).json({
    message: 'Success! Record available',
    record,
  });
};


// post a new sale
const createSale = (req, res) => {
  // return error if a field is missing
  if (!req.body.name || !req.body.date || !req.body.quantity
    || !req.body.price || !req.body.total) {
    return res.status(400).json({
      error: 'check missing field',
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
    message: 'Success: Sale Records',
    saleRecords,
  });
};


export default {
  getSaleRecords,
  createSale,
  getSpecificRecord,
};
