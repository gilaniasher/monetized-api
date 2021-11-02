const { package, database } = require('../../utils')

module.exports.handler = async event => {
  await database.put({
    TableName: 'usersTable-monetized-api',
    Item: { customerId: 'cust-id-125', apiKey: 'api-key-125', itemId: 'item-id-125' }
  }).promise()
  
  return package(200, 'Added new item')
}
