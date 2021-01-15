import * as types from "../types";

const initialState = {
  active: "",
};

export const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_TAB:
      return {
        ...state,
        active: action.payload,
      };
    default:
      return state;
  }
};
