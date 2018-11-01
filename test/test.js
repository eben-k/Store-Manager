import { expect } from 'chai';
import jwt from 'jsonwebtoken';
import request from 'supertest';
import dotenv from 'dotenv';
import server from '../server/app';

dotenv.config();
const secret = process.env.SECRET_KEY;

let authToken;


describe('default route test', () => {
  it('should return Store Manager', (done) => {
    request(server)
      .get('/')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.equal('Welcome to Store Manager!');
        done();
      });
  });
});

describe('api wrong routes', () => {
  it('should catch all wrong routes', (done) => {
    request(server)
      .post('/api/v1')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal('wrong endpoint: visit api with api/v2/auth/signup');
        done();
      });
  });
});

describe('/POST login', () => {
  it('should return 400 when a new user pass in the wrong password', (done) => {
    const userCredentials = {
      username: 'irimat4',
      password: 'glor2',
    };
    request(server)
      .post('/auth/login')
      .send(userCredentials)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
  it('should return 400 when password length is invalid', (done) => {
    const userCredentials = {
      username: 'thew4om',
      password: 'glt',
    };
    request(server)
      .post('/auth/login')
      .send(userCredentials)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
  it('should return 201 when a new user is successfully logged in', (done) => {
    const userCredentials = {
      username: 'hhfjjee',
      password: 'glory',
    };
    request(server)
      .post('/auth/login')
      .send(userCredentials)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        expect(res.body.message).to.equal('Welcome, Login Successful');
        expect(res.body.success).to.equal(true);
        done();
      });
  });
});
describe('/POST signup', () => {
  it('should not sign up an attendant if email exist', (done) => {
    const userCredentials = {
      name: 'Tri bar',
      email: 'te@gmail.com',
      password: 'glogtery',

    };
    request(server)
      .post('/auth/signup')
      .send(userCredentials)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
  it('should sign up a new attendant', (done) => {
    const userCredentials = {
      name: 'TeeJay',
      email: 'tiriat@gmail.com',
      password: 'glorlorr5y',

    };
    request(server)
      .post('/auth/signup')
      .send(userCredentials)
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });
  it('should not sign up a new attendant if email is invalid', (done) => {
    const userCredentials = {
      name: 'Teet Jopi',
      email: 'hew4mail.com',
      password: 'g768lory',
    };
    request(server)
      .post('/auth/signup')
      .send(userCredentials)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
  it('should not sign up a new attendant if password length is invalid', (done) => {
    const userCredentials = {
      name: 'SATiri',
      email: 'ew4@gmail.com',
      password: 'g4',
    };
    request(server)
      .post('/auth/signup')
      .send(userCredentials)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
  it('should not sign up a new attendant if name is invalid', (done) => {
    const userCredentials = {
      name: '123',
      email: 'hew4@gmail.com',
      password: 'algorrtth',

    };
    request(server)
      .post('/auth/signup')
      .send(userCredentials)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
  it('should not sign up a new attendant if all field is not filled', (done) => {
    request(server)
      .post('/auth/signup')
      .end((err, res) => {
        expect(res.status).to.equal(400);
        done();
      });
  });
});

// Products
// describe('POST /products endpoint', () => {
//   before((done) => {
//     const userCredentials = {
//       email: 'hew4@gmail.com',
//       password: 'algoryth',

//     };
//     request(server)
//       .post('/auth/login')
//       .send(userCredentials)
//       .end((err, res) => {
//         done();
//         authToken = res.body.token;
//       });
//   });
//   it('should add a product when user is authorized as admin', (done) => {
//     const createProduct = {
//       product: 'Soap',
//       quantity: '100',
//       price: '50',
//       category: 'Toiletries',
//       minimum_stock: '2',

//     };
//     request(server)
//       .post('/products')
//       .send(createProduct)
//       .set('Authorization', `Bearer ${authToken}`)
//       .end((error, res) => {
//         expect(res.status).to.equal(201);
//         expect(res.body.success).to.equal(true);
//         done();
//       });
//   });
//   it('should not add a product when user is authorized and product name is invalid', (done) => {
//     const createProduct = {
//       product: 22,
//       quantity: '100',
//       price: '23',
//       category: 'baby product',
//       minimum_stock: '2',
//     };

//     request(server)
//       .post('/products')
//       .send(createProduct)
//       .set('Authorization', `Bearer ${authToken}`)
//       .end((error, res) => {
//         expect(res.status).to.equal(400);
//         done();
//       });
//   });
//   it('should not add a product when user is authorized and price is not a number', (done) => {
//     const createProduct = {
//       product: 'Soap',
//       quantity: '100',
//       price: 'tttt',
//       category: 'Protein',
//       minimum_stock: '2',

//     };

//     request(server)
//       .post('/products')
//       .send(createProduct)
//       .set('Authorization', `Bearer ${authToken}`)
//       .end((error, res) => {
//         expect(res).to.have.status(400);
//         done();
//       });
//   });
//   it('should not add a product when user is authorized and all field are not filled', (done) => {
//     const createProduct = {
//       product: 'Soap',
//       quantity: '100',
//       price: '22',
//     };

//     request(server)
//       .post('/products')
//       .send(createProduct)
//       .set('Authorization', `Bearer ${authToken}`)
//       .end((error, res) => {
//         expect(res).to.have.status(400);
//         done();
//       });
// });
