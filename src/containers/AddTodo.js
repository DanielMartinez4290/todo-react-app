import React, { forwardRef, useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from 'moment';

const AddTodo = ({ dispatch }) => {
  let name, description; 

  // Code for completionDate
  const [completionDate, setCompletionDate] = useState(new Date());
  const ref = React.createRef();
  const CustomDateInput = forwardRef(({ onClick, value }, ref) => (
    <input onClick={onClick} value={value} onChange={onClick} ref={ref} />
  ));

  return (
    <div className="addTodos">
      <form
        onSubmit={e => {
          e.preventDefault();

          // if no name or description
          if (!name.value.trim() || !description.value.trim()) {
            return;
          }
          
          // dispatch action
          dispatch(addTodo(name.value, description.value, moment(completionDate).format('MM/DD/YYYY')));
          name.value = description.value = '';
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
            selected={completionDate}
            onChange={date => setCompletionDate(date)}
            customInput={<CustomDateInput ref={ref} />}
          />
          <button type="submit" className="btn btn-primary addTodoBtn">Add Todo</button>
        </div>
        
      </form>
    </div>
  )
}

export default connect()(AddTodo);