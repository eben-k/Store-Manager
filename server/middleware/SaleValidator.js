class SaleValidator {
  static addSaleValidator(req, res, next) {
    req.check('attendant', 'Attendant name is required').notEmpty();
    req.check('name', 'Product name is required').notEmpty();
    req.check('date', 'date is required').notEmpty();
    req.check('quantity', 'Quantity is required').notEmpty();
    req.check('price', 'Unit price is required').notEmpty();
    req.check('total', 'Total value is required').notEmpty();

    const errors = req.validationErrors();
    const validationErrors = [];
    if (errors) {
      errors.map(err => validationErrors.push(err.msg));
      return res.status(400).json({
        errors: validationErrors,
      });
    }
    return next();
  }
}
export default SaleValidator;
