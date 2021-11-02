const { package, database } = require('../../utils')
const { randomBytes } = require('crypto')

module.exports.handler = async event => {
  do {
    var apiKey = randomBytes(16).toString('hex')

    var result = await database.query({
      TableName: 'usersTable-monetized-api',
      IndexName: 'ApiKey',
      KeyConditionExpression: 'apiKey = :key',
      ExpressionAttributeValues: { ':key': apiKey }
    }).promise()

    console.log(result.Count, result)

  } while (result.Count !== 0)

  return package(200, apiKey)
}
