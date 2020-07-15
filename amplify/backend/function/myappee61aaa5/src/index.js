/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_CURRENCYTABLE_ARN
	STORAGE_CURRENCYTABLE_NAME
Amplify Params - DO NOT EDIT */
const axios = require('axios')
const getCoins = require('./getCoins')
const createCoin = require('./createCoin')

exports.handler = async (event) => {

	// check event.typeName either Mutation or Query
	console.log(event)

	switch(event.typeName) {
		case "Mutation": 
			await createCoin.createCoin(event)
		case "Query":
			await getCoins.getCoins()
	}
	// set default apiUrl
	// let apiUrl = `https://api.coinlore.com/api/tickers/?start=1&limit=10`;
	
	// // check if user is passing arguments, then replace apiUrl
	// if(event.arguments) {
	// 	const { start = 0, limit = 10 } = event.arguments;
  //   apiUrl = `https://api.coinlore.com/api/tickers/?start=${start}&limit=${limit}`;
	// }

	// try {
	// 	const result = await axios.get(apiUrl)
	// 	return result.data.data
	// } catch (e) {
	// 	console.log(e)
	// }
};
