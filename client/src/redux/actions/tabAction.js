import * as types from "../types";

export const changeTab = (tab) => async (dispatch) => {
  dispatch({
    type: types.CHANGE_TAB,
    payload: tab,
  });
};
