import {
    createAsyncThunk,
    createReducer,
    createAction,
  } from "@reduxjs/toolkit";
  import axios from "axios";


  
  export const setUser = createAction("SET_USER");
  
  const userReducer = createReducer(
    {},
    {
      
    }
  );
  
  export default userReducer;