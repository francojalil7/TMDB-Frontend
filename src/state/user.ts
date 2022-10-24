import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export    interface User {
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user;
export default userSlice.reducer;
