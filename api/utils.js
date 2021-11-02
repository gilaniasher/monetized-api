module.exports.package = (statusCode, body) => {
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body
  }
}

const AWS = require('aws-sdk')
module.exports.database = new AWS.DynamoDB.DocumentClient()
