import configuration from '../aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { ListTodos, CreateTodo, DeleteTodo, UpdateTodo} from '../graphql';
Amplify.configure({...configuration});

/* Action Types */
export const ALL  = 'ALL'; 
export const ADD_TODO = 'ALL_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

/* Thunks */
export const fetchTodos = () => {
    return dispatch => {
      API.graphql(graphqlOperation(ListTodos))
        .then(response => {
          dispatch(addTodos(response.data.listTodos.items));
        })
        .catch(console.error);
    }
  }
  
  export const addTodo = (todo) => {
    return dispatch => {
      API.graphql(graphqlOperation(CreateTodo, todo)).then(response => {
        dispatch(addTodoAction(response.data.createTodo));
      })
      .catch(console.error);
    }
  }
  
  export const updateTodo = (todo) => {
    return dispatch => {
      API.graphql(graphqlOperation(UpdateTodo, todo)).then(response => {
        dispatch(updateTodoAction(response.data.updateTodo));
      })
      .catch(console.error);
    }
  }
  
  export const removeTodo = (id) => {
    return dispatch => {
      API.graphql(graphqlOperation(DeleteTodo, {id})).then(response => {
        dispatch(removeTodoAction(response.data.deleteTodo.id));
      })
      .catch(console.error);
    }
  }
  
  /* Action Creators */
  export const addTodos = todos => ({
    type: ALL,
    payload: todos
  });
  
  export const addTodoAction = (todo) => ({
    type: ADD_TODO,
    payload: todo
  });
  
  export const removeTodoAction=(id)=>{
    return{
        type: REMOVE_TODO,
        id
    }
  }
  
  export const updateTodoAction=(todo)=>{
    return{
        type: UPDATE_TODO,
        payload: todo,
        id: todo.id
    }
  }