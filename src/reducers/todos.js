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
          completed: false,
          completionDate: action.payload.completedDate,
        } : todo
      )
      
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { 
          ...todo, 
          completed: !todo.completed,
          completionDate: moment(new Date()).format('MM/DD/YYYY')
        } : todo
      )
    default:
      return state
  }
}

export default todos;