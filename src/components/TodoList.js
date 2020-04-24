import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import * as moment from 'moment';

const TodoList = ({ todos, removeTodo, updateTodo }) => (
  <div className="todoList">
    {todos.map(todo => (
      <Todo 
        key={todo.id} {...todo} 
        removeTodo={() => removeTodo(todo.id)} 
        markComplete={() => updateTodo({id:todo.id, completionDate:moment(new Date()).format('MM/DD/YYYY'),completed: true})} 
        markActive={() => updateTodo({id:todo.id, completionDate:' ',completed: false})} 
      />
    ))}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      targetCompletionDate: PropTypes.string.isRequired,
      completionDate: PropTypes.string,
      completed: PropTypes.bool,
    }).isRequired
  ).isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
}

export default TodoList;