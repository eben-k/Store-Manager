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
