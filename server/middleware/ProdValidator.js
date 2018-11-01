class ProductValidator {
  static addProductValidator(req, res, next) {
    req.check('product_name', 'Product name is required').notEmpty();
    req.check('product_category', 'Category is required').notEmpty();
    req.check('quantity', 'Quantity is required as integer').notEmpty().isInt();
    req.check('minimum_stock', 'Minimum stock is required as integer').notEmpty().isInt();
    req.check('price', 'Price is required as integer').notEmpty().isInt();

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
export default ProductValidator;
