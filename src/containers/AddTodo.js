import React, { forwardRef, useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
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
          let todoObject = {name: name.value, description: description.value, targetCompletionDate:moment(completionDate).format('MM/DD/YYYY')};
          dispatch(addTodo(todoObject));
          name.value = description.value = '';
        }}
      >
        <div className="formLeft">
          <span>Name: <input ref={node => (name = node)} /> </span>
          <p className="targetCompletionDate">Target Completion Date:</p>
          <DatePicker
            selected={completionDate}
            onChange={date => setCompletionDate(date)}
            customInput={<CustomDateInput ref={ref} />}
          />
          <button type="submit" className="btn btn-primary addTodoBtn">Add Todo</button>
        </div>
        <div className="formRight">
            <span className="formDescription">Description:</span>  <textarea ref={node => (description = node)} />
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo);