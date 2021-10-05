import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteItem } from "../store/slices";
import "../assets/styles/style.css";

const TodoItem = ({ id, content, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete({ id, completed: !completed }));
  };

  const deleteTask = () => {
    dispatch(deleteItem({ id }));
  };

  return (
    <li className={completed ? "done" : null}>
      <span onClick={handleComplete}>{`${content}`}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
};

export default TodoItem;
