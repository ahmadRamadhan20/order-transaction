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
describe('User', () => {

  it('Should success if credential is valid', function(done) {
        request(server)
           .post('/login')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ username: 'wedew', password: 'asdbc' })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 

  it('Should failed if credential is invalid', function(done) {
        request(server)
           .post('/login')
           .set('Accept', 'application/json')
           .set('Content-Type', 'application/json')
           .send({ username: 'salah', password: 'salah' })
           .expect(401)
           .end(done);
    }); 

});