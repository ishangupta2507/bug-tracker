// src/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
    loginError: false,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          loginError: false,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          loginError: true,
        };
      case "LOGOUT":
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          loginError: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  