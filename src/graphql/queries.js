/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const todos = /* GraphQL */ `
  query Todos {
    todos {
      id
      name
      description
    }
  }
`;
export const getTodos = /* GraphQL */ `
  query GetTodos($id: ID!) {
    getTodos(id: $id) {
      id
      name
      description
    }
  }
`;
