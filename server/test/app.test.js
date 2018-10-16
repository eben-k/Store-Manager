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


  describe('GET all products api/v1/products', () => {
    it('should return all available products', (done) => {
      chai
        .request(server)
        .get('/api/v1/products')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message');
          res.body.products.should.be.a('array');
        });
      done();
    });
  });
});
