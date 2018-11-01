class LoginValidator {
  static checkLogin(req, res, next) {
    req.check('username', 'Username is required').notEmpty();
    req.check('password', 'Password is required').notEmpty();
    req
      .check('password', 'Minimum password length is 7 characters')
      .isLength({ min: 7 });

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
export default LoginValidator;
