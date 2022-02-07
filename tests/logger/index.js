// Copyright 2021-2022 stephendltg. All rights reserved. ISC license.

const parser = require('xml2json')
const chalk = require('chalk')
const { log, group, groupEnd, groupCollapsed } = console

/**
 * Logger for visually
 * @param {response} response
 * @returns
 */
module.exports.logger = function (response, json = true) {
  if (!(process.env.VERBOSE || false)) return

  log(chalk.blue('-----'))

  groupCollapsed(chalk.red(`Logger: [${response.headers.date}]`))

  log(chalk.blue('ℹ Status:'), response.status)
  log(chalk.blue('ℹ StatusCode:'), response.statusCode)
  log(chalk.blue('ℹ Type:'), response.type)
  log(chalk.blue('ℹ Content-length:'), response.headers['content-length'])
  log(chalk.blue('ℹ Server:'), response.headers.server)

  group(chalk.green('ℹ Reponse:'))
  switch (response.type) {
    case 'application/json':
      console.log(chalk.blue('✔ json:'), JSON.stringify(response.body))
      break
    case 'application/xml':
      console.log(chalk.blue('✔ xml:'), parser.toJson(response.text))
      break
    default:
      console.log(chalk.blue('✔ text:'), response.text)
      break
  }

  groupEnd()
  groupEnd()
}
