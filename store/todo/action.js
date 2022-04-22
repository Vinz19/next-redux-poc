export const ADD_TODO = "ADD_USER";

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    todo: newTodo,
  };
};
