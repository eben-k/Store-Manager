import db from '../models/sale';

const saleRecords = db;

// Get all records
const getSales = (req, res) => {
  res.status(200).json({
    message: 'Success: Sale Records',
    sales: saleRecords,
  });
};

// Get a single sale record
const getSingleRecord = (req, res) => {
  const id = Number(req.params.saleId);
  const saleRecord = saleRecords.find(sale => sale.saleId === id);
  if (saleRecord === undefined) {
    return res.status(404).json({
      error: `no record with id - ${id} found, enter a valid sale Id`,
    });
  }
  return res.status(200).json({
    message: 'Success! Sale Record',
    saleRecord,
  });
};

const createSale = (req, res) => {
  // new sale record Object
  const newSale = {
    saleId: saleRecords.length + 1,
    attendant: req.body.attendant,
    name: req.body.name,
    date: req.body.date,
    quantity: req.body.quantity,
    price: req.body.price,
    total: req.body.total,
  };

  saleRecords.push(newSale);
  return res.status(201).json({
    message: 'Sale has been succesfully recorded',
    newSale,
  });
};
export default {
  getSales,
  createSale,
  getSingleRecord,
};
