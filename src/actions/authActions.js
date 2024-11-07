// src/actions/authActions.js
export const login = (username, password) => {
    const mockUsername = "user";
    const mockPassword = "password";
  
    if (username === mockUsername && password === mockPassword) {
      return {
        type: "LOGIN_SUCCESS",
        payload: { username },
      };
    } else {
      return {
        type: "LOGIN_FAILURE",
      };
    }
  };
  
  export const logout = () => ({
    type: "LOGOUT",
  });
  