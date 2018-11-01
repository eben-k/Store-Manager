class SaleValidator {
  static addSaleValidator(req, res, next) {
    req.check('attendant', 'Attendant name is required').notEmpty();
    req.check('product', 'Product name is required').notEmpty();
    req.check('quantity_sold', 'Quantity is required as integer').notEmpty().isInt();
    req.check('price', 'Unit price is required as integer').notEmpty().isInt();
    req.check('total', 'Total value is required').notEmpty().isInt();

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
