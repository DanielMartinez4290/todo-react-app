import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ markActive, markComplete, removeTodo, completed, name, description, targetCompletionDate, completionDate }) =>{

  let markActiveComplete;

  if (!completed) {
    markActiveComplete = <button onClick={markComplete} className="btn btn-success">Mark Complete</button>;
  } else {
    markActiveComplete = <button onClick={markActive} className="btn btn-warning">Mark Active</button>;
  }

return (
  <div
    className="todo"
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <div className="todoName">{name}</div> 
    <section className="todoContent">
      <p className="todoDescription">{description}</p>
      <p className="todoDate">Target Completion Date: {targetCompletionDate}</p>
      <p className="todoDate">Completion Date: {completionDate}</p>
      <div className="todoActions">
        <span className="deleteTodo"> 
          <button onClick={removeTodo} className="btn btn-danger">
              Delete
          </button>
        </span>
        <span className="markComplete"> 
          {markActiveComplete}
        </span>
      </div>
    </section>
  </div>
)
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  targetCompletionDate: PropTypes.string.isRequired,
  completionDate: PropTypes.string,
  completed: PropTypes.bool,
  removeTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  markActive: PropTypes.func.isRequired
}

export default Todo;