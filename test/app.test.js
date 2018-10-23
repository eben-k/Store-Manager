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


describe('GET single record', () => {
  it('should return record with given id', (done) => {
    // chai
    request(server)
      .get('/api/v1/sales/1')
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal('Success! Record available');
        done();
      });
  });

  it('should return 404 error if record not found', (done) => {
    // chai
    request(server)
      .get('/api/v1/sales/-1')
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.error).to.equal('attendant with id - -1 not found');
        done();
      });
  });
});
