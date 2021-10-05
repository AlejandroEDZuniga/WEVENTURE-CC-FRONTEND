import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";


const TodoList = () => {

  const tasks = useSelector((state) => state.tasks);

  return (
    <ul className="list-group">
      {tasks.map((tasks) => (
        <ItemList
          id={tasks.id}
          content={tasks.content}
          completed={tasks.completed}
        />
      ))}
    </ul>
  );
};

export default TodoList;
