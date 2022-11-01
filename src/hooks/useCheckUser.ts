import { useAppDispatch } from "./store.hooks";
import { addUser } from "../state/user";
import { useState } from "react";

export const useCheckUser = () => {
  const [user, setUser] = useState({});
  const dispatch = useAppDispatch();
  const checkUser = () => {
    const item = window.localStorage.getItem("user");
    if (item) {
      setUser(JSON.parse(item));
      dispatch(addUser(JSON.parse(item)));
    }
  };
  return {user,checkUser}
};

export default useCheckUser;