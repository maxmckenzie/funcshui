const request = require('supertest');
const test = require('ava');
const express = require('express');
const funcshui = require('../index');

const app = express();

app.get('/api/example', funcshui.example({key: 'example val'}));

test.serial('demo example', async t => {
  const res = await request(app)
    .get('/api/example')
    .expect('Content-Type', /json/)
    .expect(200)

  t.is(res.body, 'Hello World')
});