export const ListTodos = `
  query ListTodos {
    listTodos{
      items {
        id,
        name,
        description,
        targetCompletionDate,
        completionDate,
        completed
      }
    }
  }
`;

export const CreateTodo = `
mutation CreateTodo(
    $name: String!
    $description: String!
    $targetCompletionDate: String!
) {
  createTodo(input:{
  name: $name,
  description: $description,
  targetCompletionDate: $targetCompletionDate
}) {
  id
  name
  description
  targetCompletionDate
}
}`;

export const UpdateTodo = `
mutation UpdateTodo(
    $id: ID!
    $completed: Boolean!
    $completionDate: String!
) {
  updateTodo(input:{
  id: $id,
  completed: $completed,
  completionDate: $completionDate
}) {
  id
  completed
  completionDate
}
}`;

export const GetTodo = `
query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id,
    name,
    description
  }
}
`;

export const DeleteTodo = `
mutation DeleteTodo($id: ID!) {
    deleteTodo(input:{id: $id}) {
      id,
      name,
      description,
      completed
    }
  }
`;