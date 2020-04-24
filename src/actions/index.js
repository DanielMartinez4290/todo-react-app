import configuration from '../aws-exports';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { ListGuitars } from '../graphql';
Amplify.configure({...configuration});


/* Thunks */
let products = [];
export const fetchProducts = () => {
  return dispatch => {
    API.graphql(graphqlOperation(ListGuitars))
      .then(response => {
        products = response.data.listTodos.items;
        dispatch(addProducts(products))
      })
      .catch(console.error);
  }
}

/* Action Creators */
export const addProducts = products => ({
  type: 'ALL',
  payload: products
});

let nextTodoId = 0
export const addTodo = (name, description, targetCompletionDate) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name,
  description,
  targetCompletionDate
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}