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
export  const sendLoginRequest = createAsyncThunk("user/login",async ({email,password}: login)=>{
  const response = await axios.post("http://localhost:3001/auth/login",{email,password})
    return response.data;
})
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
  },
  extraReducers: (builder) => {
    builder.addCase(sendLoginRequest.fulfilled, (state, action) => {
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('user', JSON.stringify(action.payload.payload));
      
      return action.payload.payload
    });
  },
});
export const { addUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user;
export default userSlice.reducer;


// export const logOutUser = createAsyncThunk("LOG_OUT_REQUEST", () => {
//  const localUser = localStorage.removeItem("user");
//  return null;
//});

//export const logInRequest = createAsyncThunk(
//  "LOG_IN_REQUEST",
//  async (data, thunkAPI) => {
//    const { username, password } = data;
//    try {
//      const user = await axios.post("http://localhost:3002/api/auth/login", {
//        username,
//        password,
//      });
//      const userData = user.data.user;
//      localStorage.setItem("user", JSON.stringify(userData));
//      return userData;
//    } catch (error) {
//      console.log(error);
//    }
//  }
//);

// export const setUser = createAsyncThunk("SET_USER", () => {
//   const localUser = JSON.parse(localStorage.getItem("user"));
//   try {
//     if (localUser !== null) {
//       return localUser;
//     } else {
//       return null;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });