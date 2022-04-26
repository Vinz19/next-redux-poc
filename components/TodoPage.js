import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../store/todos/action";

export default function Add() {
  const dispatch = useDispatch();
  const {todos} = useSelector((state) => state.todos);

  const [rule, setRule] = useState("");

  const addNewRule = () => {
    dispatch(addTodo(rule));
  };

  const handleChange = (e) => {
    setRule(e.target.value);
  };

  return (
    <div>
      <label>New Rule:</label>
      <input type="text" value={rule} onChange={handleChange} />
      <button onClick={addNewRule}>Add</button>
      <h4>Todo List:</h4>
      <ol>
        {todos && todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ol>
    </div>
  );
}
