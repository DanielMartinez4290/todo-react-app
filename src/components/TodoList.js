import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';


const TodoList = ({ todos, toggleTodo }) => (
  <div>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      targetCompletionDate: PropTypes.string.isRequired,
      completionDate: PropTypes.string,
      completed: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;