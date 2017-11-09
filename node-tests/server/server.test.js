const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;
describe('Server', () => {
  describe('Get /', () => {
    it('should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          });
        })
        .end(done);
    });
  });

  describe('Get /users', () => {
    it('should return two users in an array', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Sander',
            age: 26
          });
        })
        .end(done);
    });
  });
});
