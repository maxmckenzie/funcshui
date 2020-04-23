const request = require('supertest');
const test = require('ava');
const express = require('express');

const app = express();

app.get('/api/subdir/subexample', require('./subexample'));

test.serial('get /api/subdir/subexample', async t => {
  const res = await request(app)
    .get('/api/subdir/subexample')
    .expect('Content-Type', /json/)
    .expect(200)

  t.is(res.body, 'Hello World from subdirectory in /api!')
});
