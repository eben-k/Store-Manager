import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import server from '../app';

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


  // describe('GET all products api/v1/products', () => {
  //   it('should return all available products', (done) => {
  //     chai
  //       .request(server)
  //       .get('/api/v1/products')
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.have.property('message');
  //         res.should.be.json();
  //         res.body.products.should.be.a('array');
  //       });
  //     done();
  //   });
  // });

  describe('GET single product', () => {
    it('should return product with given id', (done) => {
      chai
        .request(server)
        .get('/api/v1/products/1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message');
        });
      done();
    });

    it('should return 404 error if product not found', (done) => {
      chai
        .request(server)
        .get('/api/v1/products/-1')
        .end((err, res) => {
          res.should.have.status(404);
          res.body.should.have.property('error');
        });
      done();
    });
  });
});
