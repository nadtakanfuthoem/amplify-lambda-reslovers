type Query {
	todos: [Todo] 
	getTodo: Todo
}

type Query {
	todos: [Todo] @function(name: "todos-${env}") <-- this todos function will return a list of Todo and link to lambda function name todos(name lambda function is from -> function/myapp/src/package.json)
	getTodo(id: ID!): Todo @function(name: "todos-${env}")
}

type Todo {
  id: ID!
  name: String!
  description: String
}
