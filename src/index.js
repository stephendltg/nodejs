// Copyright 2021-2022 stephendltg. All rights reserved. ISC license.

const { debug } = require('./deps')

/**
 * hello
 * @param {string} name
 * @returns {string}
 */
function hello (name) {
  return 'hello ' + name
}

debug(hello(' you'))

module.exports = hello
