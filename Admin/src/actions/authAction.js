import axios from "../axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
} from "./actionTypes";

export const setLogin = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  const res = await axios.post("/auth/admin/signin", {
    ...user,
  });
  if (res.status === 200) {
    const { token, UserData } = res.data;
    console.log(res.data);
    res.data.UserData.authenticate = true;
    localStorage.setItem("UserData", JSON.stringify(UserData));
    dispatch({ type: LOGIN_SUCCESS, payload: UserData });
  } else {
    dispatch({ type: LOGIN_FAILED, payload: { error: res.data.error } });
  }
};

export const setLogout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT_REQUEST });
};
