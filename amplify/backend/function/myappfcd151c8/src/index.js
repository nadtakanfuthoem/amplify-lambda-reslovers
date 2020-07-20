const TODOS=  [
	{ id: 1, name: "Wake me up at 4 AM"},
	{ id: 2, name: "Office at 9 AM"},
	{ id: 3, name: "Sleep at 10 PM"}
]

// create getTodos function
function getTodos() {
	return TODOS;
}

// create getTodoById
function getTodoById(id) {
	console.log(id);
	return TODOS.find(todo => todo.id == id);
}

// create reslover
// this reslovers should match with schema.graphql
const reslovers = {
	Query: {
		todos: () => {
			return getTodos();
		},
		getTodo: (ctx) => {
			return getTodoById(ctx.arguments.id)
		}
	}
}

exports.handler = async (event) => {
	// get reslover
	const typeHandler = reslovers[event.typeName];
	if(typeHandler) {
		// call handler type
		const reslover = typeHandler[event.fieldName];
		if(reslover){
			var result = await reslover(event)
			// { id: 1, name: 'Wake me up at 4 AM' } getTodo
			// todos
			// [{ id: 1, name: 'Wake me up at 4 AM' },
			//  { id: 2, name: 'Office at 9 AM' },
			//  { id: 3, name: 'Sleep at 10 PM' }]
			console.log(`result`, result)
			return result
		}
	}
	throw new Error("Reslover not found.")
};
