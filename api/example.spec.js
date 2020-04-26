const request = require('supertest');
const test = require('ava');
const express = require('express');

const app = express();

app.get('/api/example', require('./example'));

test.serial('demo example', async t => {
  const res = await request(app)
    .get('/api/example')
    .expect('Content-Type', /json/)
    .expect(200)

  t.is(res.body, 'Hello World')
});