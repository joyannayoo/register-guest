import { LOGOUT } from "./actionTypes";

const logoutAction = () => {
  return {
    type: LOGOUT,
  };
};

export const logoutFunction = () => (dispatch) => {
  localStorage.clear();
  dispatch(logoutAction());
};
