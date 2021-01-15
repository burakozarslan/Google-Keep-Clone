import * as types from "../types";

const initialState = {
  token: localStorage.getItem("notesToken"),
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LOGOUT:
      localStorage.removeItem("notesToken");
      return {
        ...state,
        token: null,
        loading: false,
        error: null,
      };
    case types.USER_AUTH_REQUEST:
      return { ...state, loading: true, error: null };
    case types.USER_AUTH_SUCCESS:
      localStorage.setItem("notesToken", action.payload.token);
      return {
        ...state,
        loading: false,
        error: null,
        token: action.payload.token,
      };
    case types.USER_AUTH_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
