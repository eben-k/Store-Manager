import pool from '../configDb';
import Helper from './Helper';

const Users = {
  async createUser(req, res) {
    if (!req.body.full_name || !req.body.username || !req.body.password || !req.body.position) {
      return res.status(400).send({ error: 'Please check required fields' });
    }
    if (!req.body.email || !Helper.validEmail(req.body.email)) {
      return res.status(400).send({ message: 'Please enter valid email address' });
    }
    const hashedPassword = Helper.hashedPassword(req.body.password);
    const createUserQuery = 'INSERT INTO users(full_name, username, email, password, position, created_at) VALUES ($1, $2, $3, $4, $5, Now()) returning *';
    const inputValues = [
      req.body.full_name,
      req.body.username,
      req.body.email,
      hashedPassword,
      req.body.position,
    ];
    try {
      const { rows } = await pool.query(createUserQuery, inputValues);
      const token = Helper.createToken(rows[0].id);

      return res.status(201).json({
        success: true,
        message: 'User registration successful',
        token,
      });
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(409).json({
          success: false,
          message: 'Error: User already exists with that email address',
        });
      }

      return res.status(400).send(error);
    }
  },

  async logInUser(req, res) {
    if (!req.body.username || !req.body.password) {
      return res.status(400).send({ message: 'Please check required fields' });
    }
    const usernameText = 'SELECT * FROM users WHERE username = $1';
    try {
      const { rows } = await pool.query(usernameText, [req.body.username]);
      if (!rows[0]) {
        return res.status(400).send({ message: 'The credentials you provided is incorrect' });
      }
      if (!Helper.verifyPassword(rows[0].password, req.body.password)) {
        return res.status(400).send({ message: 'The credentials you provided is incorrect' });
      }
      const token = Helper.createToken(rows[0].id, rows[0].position);
      return res.status(201).json({
        message: 'Welcome, Login Successful',
        token,
      });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default Users;
