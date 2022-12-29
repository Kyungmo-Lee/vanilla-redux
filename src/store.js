import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.unshift({ text: action.payload, id: Date.now() });
    },
    removeToDo: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

export const { addToDo, removeToDo } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });
