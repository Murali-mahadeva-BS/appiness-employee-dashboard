import { LOGIN_USER, LOGOUT_USER } from "../types/users";

export const userLogin = (user) => async (dispatch) => {
  const validEmail = "Employee_One@gmail.com";
  const validPassword = "Employee123";
  const { email, password } = user;
  if (email === validEmail && password === validPassword) {
    await dispatch({ type: LOGIN_USER, payload: null });
    return true;
  } else return false;
};

export const userLogout = () => async (dispatch) => {
  await dispatch({ type: LOGOUT_USER, payload: null });
};
