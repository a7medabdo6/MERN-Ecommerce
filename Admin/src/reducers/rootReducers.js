import { combineReducers } from "redux";

// Front
import Layout from "./layoutReducer";

// Authentication Module
import Account from "./registerReducer";
import Login from "./loginReducer";
import Forget from "./forgetPassword";

import authReducer from "./authReducer";

const rootReducer = combineReducers({
  // public
  Layout,

  // Authentication
  Account,
  Login,
  Forget,
  authReducer,
});

export default rootReducer;
