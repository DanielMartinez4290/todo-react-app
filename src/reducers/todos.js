import * as moment from 'moment';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ALL':
      return action.payload;
    
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          description: action.description,
          targetCompletionDate: action.targetCompletionDate,
          completed: false
        }
      ]
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