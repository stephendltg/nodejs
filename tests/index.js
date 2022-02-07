// Copyright 2021-2022 stephendltg. All rights reserved. ISC license.

// Debug mode mocha
require('debug').enable('*')

const { describe, it } = require('mocha')
const chai = require('chai')
const { jestSnapshotPlugin } = require('mocha-chai-jest-snapshot')

chai.use(jestSnapshotPlugin())

const { config } = require('./config/index')
const { logger } = require('./logger')
const { expect } = require('chai')

module.exports = {
  describe,
  expect,
  it,
  config,
  logger
}
