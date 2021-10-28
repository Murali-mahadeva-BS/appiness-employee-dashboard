import { LOGIN_USER, LOGOUT_USER } from "../types/users";

const initialState = {
  loggedIn: false,
};

export default function Users(state = initialState, data) {
  switch (data.type) {
    case LOGIN_USER:
      return { ...state, loggedIn: true };
    case LOGOUT_USER:
      return { ...state, loggedIn: false };
    default: {
      return { ...state };
    }
  }
}
