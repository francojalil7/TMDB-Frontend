import { createAction, createReducer } from "@reduxjs/toolkit";

interface User {
  name: string;
  lastname: string;
  email: string;
  id: string;
}

const initialState: User = {
  name: "",
  lastname: "",
  email: "",
  id: "",
};
const setUser = createAction<User>("SET_USER");

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(setUser, (state, action) => {
    console.log(state, action.payload);
  });
});
