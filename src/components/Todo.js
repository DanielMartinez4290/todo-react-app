import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, name, description, targetCompletionDate }) => (
  <div
    className="todo"
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <div className="todoName">{name}</div> 
    <section className="todoContent">
      <p>{description}</p>
      <p className="todoDate">Target Completion Date: {targetCompletionDate}</p>
      <p className="todoDate">Completion Date: </p>
      <div className="todoActions">
        <span className="deleteTodo"> 
          <button className="btn btn-danger">
              Delete
          </button>
        </span>
        <span className="markComplete"> 
          <button onClick={onClick} className="btn btn-success">
              Mark Complete
          </button>
        </span>
      </div>
    </section>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  targetCompletionDate: PropTypes.string.isRequired
}

export default Todo;