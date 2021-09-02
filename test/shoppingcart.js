//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let User = require('../api/models/user.js');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();
let expect = require('chai').expect;
let request = require('supertest');

chai.use(chaiHttp);

//Our parent block
describe('ShoppingCart', () => {

  var token = null;
  before(function (done) {
    request(server)
           .post('/login')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ username: 'admin', password: 'asdbc' })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              token = response.body.message;
           })
           .end(done);
  });

  describe('/GET ShoppingCart', () => {
      it('it should GET all the products in cart', (done) => {
        request(server)
        		.get('/shoppingcart')
        		.set('Content-Type', 'application/json')
      			.set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.message.items.should.be.a('array');
              done();
            });
      });
  });

  describe('/POST ShoppingCart', () => {

      it('it should give valid request for adding an item to cart', (done) => {
      	let item = {
      		prod_id: 'MS2M9D',
      		quantity: 10
      	}
        request(server)
        		.post('/shoppingcart')
        		.set('Content-Type', 'application/json')
      			.set('Authorization', 'Bearer ' + token)
      			.send(item)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('status').eql('success');
              done();
            });
      });

      it('it should give invalid request for uncomplete field (theres no quantity field)', (done) => {
        request(server)
        		.post('/shoppingcart')
        		.set('Content-Type', 'application/json')
      			.set('Authorization', 'Bearer ' + token)
      			.send({ prod_id: 'MK2M2' })
            .end((err, res) => {
                res.should.have.status(400);
              done();
            });
      });

  });

  describe('/DELETE ShoppingCart', () => {
      it('it should give invalid request for deleting an item thats not found', (done) => {
        request(server)
        		.delete('/shoppingcart/MK2dM2')
        		.set('Content-Type', 'application/json')
      			.set('Authorization', 'Bearer ' + token)
            .end((err, res) => {
                res.should.have.status(400);
              done();
            });
      });
  });

});