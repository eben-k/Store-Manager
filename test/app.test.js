import { expect } from 'chai';
import request from 'supertest';
import 'chai/register-should';
import server from '../server/app';


// chai.use(chaiHttp);

describe('API endpoints test', () => {
  describe('default route test /api/v1/', () => {
    it('should return Welcome to Store Manager!', (done) => {
      // chai
      request(server)
        .get('/api/v1/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          // res.body.should.have.property('message');
          expect(res.body).to.equal('Welcome to Store Manager!');
          done();
        });
    });
  });
});

describe('GET single product', () => {
  it('should return product with given id', (done) => {
    // chai
    request(server)
      .get('/api/v1/products/1')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Success! Product available');
      });
    done();
  });

  it('should return 404 error if product not found', (done) => {
    // chai
    request(server)
      .get('/api/v1/products/-1')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.error).to.equal('no product with id - -1 found');
      });
    done();
  });
});

describe('GET all products api/v1/products', () => {
  it('should return all available products', (done) => {
    // chai
    request(server)
      .get('/api/v1/products')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Success: Products in stock');
        expect(res.body.products).to.be.an('array');
        done();
      });
  });
});

// create sale record
describe('CREATE sale record', () => {
  it('should return a status code 400 if a required field is missing', (done) => {
    const sale = {
      id: 0,
      name: 'Pampers Baby Diapers',
      date: '3/4/2018',
      quantity: '10',
    };
    // chai
    request(server)
      .post('/api/v1/sales')
      .send(sale)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal('check missing field');
        done();
      });
  });

  it('should create a new sale record', (done) => {
    const sale = {
      id: 0,
      name: 'Pampers Baby Diapers',
      date: '3/4/2018',
      quantity: '10',
      price: '$23',
      total: '230',
    }; // chai
    request(server)
      .post('/api/v1/sales')
      .send(sale)

      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Success! Sale recorded!');
        done();
      });
  });
});

// create product
describe('CREATE product', () => {
  it('should create a new product', (done) => {
    const product = {
      id: 0,
      name: 'Pampers Baby Diapers',
      category: 'baby products',
      quantity: '10 boxes',
      price: '$10',
    };
    // chai
    request(server)
      .post('/api/v1/products')
      .send(product)

      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Success! Product added');
        done();
      });
  });

  it('should return a status code 400 if a required field is missing', (done) => {
    const product = {
      id: 0,
      name: 'Pampers Baby Diapers',
      category: 'baby products',
      quantity: '10 boxes',
    };
    // chai
    request(server)
      .post('/api/v1/products')
      .send(product)

      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.error).to.equal('check missing field');
        done();
      });
  });
});

describe('GET all sale records api/v1/sales', () => {
  it('should return all available sales records', (done) => {
    // chai
    request(server)
      .get('/api/v1/sales')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Success: Sale Records');
        expect(res.body.saleRecords).to.be.an('array');
        done();
      });
  });
});
