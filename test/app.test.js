import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import server from '../server/app';


chai.use(chaiHttp);

describe('API endpoints test', () => {
  describe('default route test /api/v1/', () => {
    it('should return Welcome to Store Manager!', (done) => {
      chai
        .request(server)
        .get('/api/v1/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message');
          res.body.message.should.eql('Welcome to Store Manager!');
        });
      done();
    });
  });

  describe('GET all products api/v1/products', () => {
    it('should return all available products', (done) => {
      chai
        .request(server)
        .get('/api/v1/products')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message');
          res.body.products.should.be.a('array');
          done();
        });
      });

  // create sale record
  describe('CREATE sale record', () => {
    it('should create a new sale record', (done) => {
      const sale = {
        id: 0,
        name: 'Pampers Baby Diapers',
        date: '3/4/2018',
        quantity: '10',
        price: '$23',
        total: '230',
      };
      chai
        .request(server)
        .post('/api/v1/sales')
        .send(sale)

  // create product
  describe('CREATE product', () => {
    it('should create a new product', (done) => {
      const product = {
        id: 0,
        name: 'Pampers Baby Diapers',
        category: 'baby products',
        quantity: '10 boxes',
        price: '$10',
      }; chai
        .request(server)
        .post('/api/v1/products')
        .send(product)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message');
        });
      done();
    });

    it('should return a status code 400 if a required field is missing', (done) => {

      const sale = {
        id: 0,
        name: 'Pampers Baby Diapers',
        date: '3/4/2018',
        quantity: '10',
      };
      chai
        .request(server)
        .post('/api/v1/sales')
        .send(sale)

      const product = {
        id: 0,
        name: 'Pampers Baby Diapers',
        category: 'baby products',
        quantity: '10 boxes',
      };
      chai
        .request(server)
        .post('/api/v1/products')
        .send(product)

        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property('error');
        });
      done();
    });
  });
});
