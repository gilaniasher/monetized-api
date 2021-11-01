const { package } = require('../../utils')

module.exports.handler = async event => {
  return package(200, JSON.stringify({
    message: "Get request worked",
    input: event,
  }))
}
