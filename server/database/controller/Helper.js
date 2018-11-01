import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const Helper = {
  hashedPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  },
  verifyPassword(hashedPassword, password) {
    return bcrypt.compareSync(password, hashedPassword);
  },
  validEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  },
  createToken(id, position) {
    const token = jwt.sign({
      userId: id,
      userPosition: position,
    },
    process.env.SECRET_KEY, { expiresIn: '3hrs' });
    return token;
  },
};
export default Helper;
