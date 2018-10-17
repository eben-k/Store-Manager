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

export default {
  getSpecificRecord,
};
