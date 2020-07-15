# Amplify Lambda reslovers 

# API
Amplify is allow you only have 1 api.

# Commands

``` amplify add function ```

After run command above to create lambda function. Then to install npm module, go to amplify/backend/function/{lamda_floder}/src

# Graphql 
You can only have one type Query in schema.graphql

type Query {
	todos: [Todo] @function(name: "todos-${env}") <-- this todos function will return a list of Todo and link to lambda function name todos(name lambda function is from -> function/myapp/src/package.json)
	getTodo(id: ID!): Todo @function(name: "todos-${env}")
}

type Todo {
  id: ID!
  name: String!
  description: String
}

# Storage
run ```amplify add storage``` to add dynamodb

run ```amplify update function``` to update permission lambda function to perform query with dynamodb

# Testing

Example query on Appsync console
run ``` amplify api console ``` then run query below.

query{
  getTodo(id:1){
    id
    name
  }
}

# basic request
query listCoins {
  getCoins {
    price_usd
    name
    id
    symbol
  }
}

# request with arguments
query listCoinsWithArgs {
  getCoins(limit:3 start: 10) {
    price_usd
    name
    id
    symbol
  }
}

Local testing

### resources
https://www.youtube.com/watch?v=uI_S1_ucXi4
