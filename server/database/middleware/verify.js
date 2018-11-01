import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import pool from '../configDb';

dotenv.config();

const secret = process.env.SECRET_KEY;

const Authenticate = {

  async tokenVerify(req, res, next) {
    const tokenHandler = req.headers.authentication;
    if (!tokenHandler) {
      return res.status(400).json({ message: 'Token is not provided' });
    }
    try {
      const allowed = await jwt.verify(tokenHandler, secret);

      const text = 'SELECT * FROM users WHERE id = $1';

      const { rows } = await pool.query(text, [allowed.userId]);

      if (!rows[0]) {
        return res.status(400).send({ message: 'Invalid Token' });
      }
      req.user = { id: allowed.userId, position: allowed.position };
      next();
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};


export default Authenticate;
