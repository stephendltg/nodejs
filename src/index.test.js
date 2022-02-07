const { describe, expect, test } = require('@jest/globals')
const hello = require('./')

describe('[index/hello] hello()', () => {
  test.each`
    string | expected
    ${'World'} | ${'hello World'}
  `('returns $expected when hello $string', ({ string, expected }) => {
    expect(hello(string)).toEqual(expected)
  })
})
