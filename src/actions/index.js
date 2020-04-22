let nextTodoId = 0
export const addTodo = (name, description, targetCompletionDate) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name,
  description,
  targetCompletionDate
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}