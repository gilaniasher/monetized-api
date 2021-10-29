module.exports.handler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Get request worked",
        input: event,
      }
    )
  }
}
