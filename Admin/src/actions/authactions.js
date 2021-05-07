import {
  CHECK_LOGIN,
  LOGIN_USER_SUCCESSFUL,
  API_ERROR,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER,
  REGISTER_USER_SUCCESSFUL,
  REGISTER_USER_FAILED,
  FORGET_USER,
  FORGET_USER_SUCCESSFUL,
  FORGET_PASSWORD_API_FAILED,
} from "./actionTypes";

export const checkLogin = (user, history) => {
  return {
    type: CHECK_LOGIN,
    payload: { user, history },
  };
};

export const loginUserSuccessful = (user) => {
  return {
    type: LOGIN_USER_SUCCESSFUL,
    payload: user,
  };
};

export const apiError = (error) => {
  return {
    type: API_ERROR,
    payload: error,
  };
};

export const logoutUser = (history) => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_USER_SUCCESS,
    payload: {},
  };
};

export const registerUser = (user) => {
  return {
    type: REGISTER_USER,
    payload: { user },
  };
};

export const registerUserSuccessful = (user) => {
  return {
    type: REGISTER_USER_SUCCESSFUL,
    payload: user,
  };
};

export const registerUserFailed = (error) => {
  return {
    type: REGISTER_USER_FAILED,
    payload: error,
  };
};

export const forgetUser = (user, history) => {
  return {
    type: FORGET_USER,
    payload: { user, history },
  };
};

export const forgetUserSuccessful = (message) => {
  return {
    type: FORGET_USER_SUCCESSFUL,
    payload: message,
  };
};

export const userForgetPasswordError = (error) => {
  return {
    type: FORGET_PASSWORD_API_FAILED,
    payload: error,
  };
};
