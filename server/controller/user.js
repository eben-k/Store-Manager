import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import db from '../models/users';

dotenv.config();

const userList = db;
const secret = process.env.SECRET_KEY;

class Users {
  static getAllUsers(req, res) {
    res.status(201).json({
      userList,
      message: 'Success! Here We Are!',
      error: false,
    });
  }

  static getUser(req, res) {
    const id = Number(req.params.userId);
    const userRecord = userList.find(user => user.userId === id);
    if (userRecord === undefined) {
      return res.status(404).json({
        error: `No User with id - ${id} found, enter a valid User Id`,
      });
    }
    return res.status(200).json({
      message: 'Success! User Found',
      userRecord,
    });
  }

  static loginUser(req, res) {
    const { username, password } = req.body;
    let userAuth;
    let found = false;
    userList.map((user) => {
      if (user.username === username && bcrypt.compareSync(password, user.password)) {
        const {
          userId, name, email, position, created,
        } = user;
        userAuth = {
          userId,
          name,
          username,
          email,
          position,
          created,
        };
        found = true;
        return true;
      }
      return false;
    });
    if (found) {
      const token = jwt.sign(userAuth, secret, { expiresIn: '1hr' });
      return (
        res.status(200).json({
          userAuth,
          token,
          message: 'Success',
          error: false,
        })
      );
    }
    return (
      res.status(401).json({
        message: 'Wrong detail',
        error: true,
      })
    );
  }

  static createUser(req, res) {
    const {
      name, username, email, password, position,
    } = req.body;
    let existing = false;
    let userDetail;
    userList.map((user) => {
      if (user.username === username) {
        existing = true;
        return false;
      }
      return true;
    });
    if (!existing) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const userId = userList.length + 1;
      userDetail = {
        userId,
        name,
        username,
        email,
        password: hashedPassword,
        position,
        created: new Date(),
      };
      userList.push(userDetail);
      return (
        res.status(201).json({
          userDetail,
          message: 'User created successfully',
          error: false,
        })
      );
    }
    return (
      res.status(403).json({
        message: 'Username is taken',
        error: true,
      })
    );
  }
}

export default Users;
