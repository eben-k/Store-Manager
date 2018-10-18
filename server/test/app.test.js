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
      }; chai
        .request(server)
        .post('/api/v1/sales')
        .send(sale)
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
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.have.property('error');
        });
      done();
    });
  });
});
