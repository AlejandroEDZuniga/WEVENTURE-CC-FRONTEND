import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slices";
import "../assets/styles/style.css";

const AddTaskForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addTask({
        content: value,
      })
    );
    setValue(event.value = "");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          // className="form-control mb-2 mr-sm-2"
          placeholder="What needs to be accomplished today?"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
      </form>
    </>
  );
};

export default AddTaskForm;
