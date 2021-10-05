import React from "react";
import AddTaskForm from "./Form";
import TodoList from "./TodoList";
import { useDispatch } from "react-redux";
import { deleteAllTasks } from "../store/slices";

const Layout = () => {
  const dispatch = useDispatch();
  const deleteAll = () => {
    dispatch(deleteAllTasks());
  };
  return (
    <main>
      <h1>WEVENTURE Coding Challenge</h1>
      <AddTaskForm />
      <TodoList />
      <button onClick={deleteAll} className="clearAll">
        Clear all
      </button>
    </main>
  );
};

export default Layout;
