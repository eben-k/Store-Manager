import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const sql = `
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS produts;
DROP TABLE IF EXISTS sales;

CREATE TABLE IF NOT EXISTS USERS(id serial PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  position VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW());

CREATE TABLE IF NOT EXISTS PRODUCTS(id serial PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  product_category VARCHAR(255) UNIQUE NOT NULL,
  price MONEY NOT NULL,
  quantity INTEGER NOT NULL,
  minimum_stock INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW());

CREATE TABLE IF NOT EXISTS SALES(id serial PRIMARY KEY,
  attendant VARCHAR(255) NOT NULL,
  product VARCHAR(100) UNIQUE NOT NULL,
  quantity_sold INTEGER NOT NULL,
  price MONEY NOT NULL,
  total INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  );`;

const client = new pg.Client(process.env.DATABASE_URL);
client.connect();
client.query(sql, (err) => {
  if (err) {
    console.log(err);
    client.end();
  } else {
    client.end();
  }
});
