class ValidateSignup {
  static checkSignup(req, res, next) {
    req.check('full_name', 'Full Name is required').notEmpty();
    req.check('username', 'Username is required').notEmpty();
    req.check('email', 'Email is required').notEmpty();
    req.check('email', 'Email is not valid').isEmail();
    req.check('password', 'Password is required').notEmpty();
    req.check('position', 'Position is required').notEmpty();
    req.check('password', 'Minimum password length is 6 characters')
      .isLength({ min: 6 });
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
export default ValidateSignup;
