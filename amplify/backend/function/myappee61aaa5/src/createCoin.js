const AWS = require('aws-sdk')
const { v4: uuid } = require('uuid')
const region = process.env.REGION
const ddb_table_name = process.env.STORAGE_CURRENCYTABLE_NAME
const docClient = new AWS.DynamoDB.DocumentClient({region})
const createCoin = {};

async function write(params) {
	await docClient.put(params).promise()
	return params.Item;
}

createCoin.createCoin= async (event) => {
	console.log(`event`, event);
	// create new arguments to add to table including id auto generate
	const args = { ...event.arguments, id: uuid() }
	
	var params = {
		TableName: ddb_table_name,
		Item: args
	}

	// check if user is passing data, then write to dynamodb table
	if(Object.keys(event.arguments).length > 0) {
		const result = await write(params)
		return result;
	}
}

module.exports = createCoin