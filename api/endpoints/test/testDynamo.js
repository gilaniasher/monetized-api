const database = require('serverless-dynamodb-client').doc

module.exports.handler = async event => {
  await database.put({
    TableName: 'usersTable-monetized-api',
    Item: { customerId: 'cust-id-125', apiKey: 'api-key-125', itemId: 'item-id-125' }
  }).promise()
  
  return { statusCode: 200, body: 'Added new item' }
}
