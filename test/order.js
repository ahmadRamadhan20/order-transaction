//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Order = require('../api/models/order.js');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();
let expect = require('chai').expect;
let request = require('supertest');

chai.use(chaiHttp);

//Our parent block
describe('Order', () => {

  var token = null;
  before(function (done) {
    request(server)
           .post('/login')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ username: 'wedew3', password: 'asdbc' })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              token = response.body.message;
              console.log(token);
           })
           .end(done);
  });

  describe('/GET Order', () => {
      it('it should GET all order of the user', (done) => {
        request(server)
        		.get('/order')
        		.set('Content-Type', 'application/json')
      			.set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('status').eql('success');
              done();
            });
      });
  });

  describe('/POST Order', () => {
      it('it should give invalid request because no item in shoppingcart', (done) => {
      	let item = {
            name: "sugih",
            phonenumber: "0823288",
            email: "mwkdwm@gmail.com",
            address: "melawar"
      	}
        request(server)
        		.post('/order')
        		.set('Content-Type', 'application/json')
      			.set('Authorization', 'Bearer ' + token)
      			.send(item)
            .end((err, res) => {
                res.should.have.status(400);
              done();
            });
      });

      it('it should give invalid request for uncomplete field (theres no address field)', (done) => {
        let item = {
            name: "sugih",
            phonenumber: "0823288",
            email: "mwkdwm@gmail.com"
        }
        request(server)
        		.post('/order')
        		.set('Content-Type', 'application/json')
      			.set('Authorization', 'Bearer ' + token)
      			.send(item)
            .end((err, res) => {
                res.should.have.status(400);
              done();
            });
      });

  });

  describe('/POST Order/:order_id', () => {
      it('it should give invalid request for invalid order id', (done) => {
        let item = {
          bank : "BCA",
          account_number : "1231231",
          name : "sugih"
        }
        request(server)
            .post('/order/salahorderid')
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + token)
            .send(item)
            .end((err, res) => {
                res.should.have.status(400);
              done();
            });
      });
  });

});