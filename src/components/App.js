import React from 'react'
import FilterTodos from './FilterTodos';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import {NotificationContainer, NotificationManager} from 'react-notifications';

const App = () => (
  <div>

    <h1>Todo List</h1>
    <NotificationContainer/>
    <FilterTodos />
    <VisibleTodoList />
    <AddTodo />
  </div>
)

export default App;