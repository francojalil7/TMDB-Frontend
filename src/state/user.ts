import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { login } from "../interfaces/forms.interfaces";
import { RootState } from "./store";

export interface User {
  name: string;
  lastname: string;
  email: string;
  id: string;
}
export const sendLoginRequest = createAsyncThunk(
  "user/login",
  async ({ email, password }: login) => {
    const response = await axios.post("http://localhost:3001/auth/login", {
      email,
      password,
    });
    return response.data;
  }
);

export const sendLogOutRequest = createAsyncThunk("user/logout", async () => {
  const response = await axios.post("http://localhost:3001/auth/logout");
  return response;
});
const initialState: User = {
  name: "",
  lastname: "",
  email: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
    getUser: (state,action: PayloadAction<User>)=>{
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendLoginRequest.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.payload));
        return action.payload.payload;
      })
      .addCase(sendLogOutRequest.fulfilled, (state, action) => {
        console.log(
          "🚀 ~ file: user.ts ~ line 49 ~ builder.addCase ~ action",
          action
        );
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        return initialState;
      });
  },
});
export const { addUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user;
export default userSlice.reducer;
