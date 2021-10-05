import { createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [
    {
      id: 1,
      content: "Get up early",
      completed: true,
    },
    {
      id: 2,
      content: "Do some meditation",
      completed: true,
    },
    {
      id: 3,
      content: "Eat a healthy breakfast",
      completed: false,
    },
    {
      id: 4,
      content: "Drink plenty of water",
      completed: false,
    },
    {
      id: 5,
      content: "Exercise",
      completed: false,
    },
    {
      id: 6,
      content: "Smile :)",
      completed: false,
    },
  ],

  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        content: action.payload.content,
        completed: false,
      };
      state.push(newTask);
    },
    // toogleComplete: (state, action) => {
    //   const index = state.findIndex((task) => task.id === action.payload.id);
    //   state[index].completed = action.payload.completed;
    // },
    toggleComplete: (state, action) => {
        const index = state.findIndex((tasks) => tasks.id === action.payload.id);
        state[index].completed = action.payload.completed;
    },
    deleteItem: (state,action)=>{
       return  state.filter((task)=> task.id !== action.payload.id)
    },
    deleteAllTasks: (state,action)=>{
        return state = []
    }
  },
});

export const { addTask, toggleComplete, deleteItem, deleteAllTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
