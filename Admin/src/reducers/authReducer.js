import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
} from "../actions/actionTypes";
const initState = {
  user: {
    name: "",
    email: "",
    photo: "",
  },
  authenticate: false,
  authenticating: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      console.log(action.payload);
      return (state = {
        ...state,
        authenticating: true,
      });
      break;
    case LOGIN_SUCCESS:
      return (state = {
        ...state,
        user: action.payload.UserData,
        authenticate: true,
        authenticating: false,
      });
      break;
    case LOGOUT_REQUEST:
      return (state = {
        ...initState,
      });

    default:
      return state;
  }
};
