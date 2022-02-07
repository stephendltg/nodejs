// Copyright 2021-2022 stephendltg. All rights reserved. ISC license.

/**
 * deps.js
 *
 * This module re-exports the required methods from the dependant remote Ramda module.
 */

// force to enable debug
require('debug').enable('*')

// debug dependencies
const debug = require('debug')('worker')

// exports all dependencies
module.exports = {
  debug
}
