import {
  REGISTER_START,
  REGISTER_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS
} from "../actions";

const intialState = {
  LoggingIn: false,
  isLoggedIn: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case REGISTER_START:
      return {
        ...state,
        isLoggedIn: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true
      };
    case LOGIN_START:
      return {
        ...state,
        LoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        LoggingIn: false,
        isLoggedIn: true,
        token: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
