class ProductValidator {
  static addProductValidator(req, res, next) {
    req.check('name', 'Product name is required').notEmpty();
    req.check('category', 'Category is required').notEmpty();
    req.check('quantity', 'Quantity is required').notEmpty();
    req.check('price', 'Price is required').notEmpty();

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
