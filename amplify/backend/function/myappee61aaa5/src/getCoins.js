const AWS = require("aws-sdk")
const region = process.env.REGION
const storageCurrencytableName = process.env.STORAGE_CURRENCYTABLE_NAME
const docClient = new AWS.DynamoDB.DocumentClient({region})
const getCoins = {}
const params = {
	TableName: storageCurrencytableName
}

getCoins.getCoins = async () => {
	docClient.scan(params, function(err, data) {
		if(err) return err
		return data
	}).promise()
}

module.exports = getCoins;