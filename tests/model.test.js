// Copyright 2021-2022 stephendltg. All rights reserved. ISC license.
// test: VERBOSE=1 npx mocha test/model.test.js

const {
  config,
  describe,
  expect,
  it,
  logger
} = require('.')

// request
const request = require('supertest')(config.get('URI'))

describe('[API]', function () {
  it('GET /', function (done) {
    request
      .get('/')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .set('x-forwarded-proto', 'https')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toMatchSnapshot()
        logger(response)
        done()
      })
      .catch((err) => done(err))
  })
})
