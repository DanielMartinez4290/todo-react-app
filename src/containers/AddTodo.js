import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTodo = ({ dispatch }) => {
  let name, description, targetCompletionDate; 

  return (
    <div className="addTodos">
      <form
        onSubmit={e => {
          e.preventDefault();

          if (!name.value.trim()) {
            return
          }
          dispatch(addTodo(name.value, description.value, targetCompletionDate.value))
          name.value = description.value = targetCompletionDate.value = '';
        }}
      >
        <div className="formNames">
          <p>Name:</p>
          <p>Description:</p>
          <p className="targetCompletionDate">Target Completion Date:</p>
        </div>
        <div className="formFields">
          <input ref={node => (name = node)} /> 
          <textarea ref={node => (description = node)} /> 
          <DatePicker
            selected={targetCompletionDate}
            ref={(c) => targetCompletionDate = c}
          />
          <button type="submit" className="btn btn-primary addTodoBtn">Add Todo</button>
        </div>
        
      </form>
    </div>
  )
}

export default connect()(AddTodo);