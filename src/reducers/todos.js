import * as moment from 'moment';

const todos = (state = [], action) => {  
  switch (action.type) {
    case 'ALL':
      return action.payload;
    
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ]

    case 'REMOVE_TODO':
      return state.filter(item=> action.id !== item.id);  

    case 'UPDATE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { 
          ...todo, 
          completed: action.payload.completed,
          completionDate: action.payload.completionDate
        } : todo
      )
    default:
      return state
  }
}

export default todos;