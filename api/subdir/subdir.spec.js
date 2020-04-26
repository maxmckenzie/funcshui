const request = require('supertest');
const test = require('ava');
const express = require('express');
const funcshui = require('../../index');

const app = express();

app.get('/api/subdir', funcshui.subExample({key: 'subdir example val'}));

test.serial('demo subdirectory example', async t => {
  const res = await request(app)
    .get('/api/subdir')
    .expect('Content-Type', /json/)
    .expect(200)

  t.is(res.body, 'Hello World from subdirectory in /api!')
});
