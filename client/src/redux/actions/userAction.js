import * as types from "../types";
import { postData } from "./networkHelper/fetchData.js";

export const authenticateUser = (data) => async (dispatch) => {
  dispatch({
    type: types.USER_AUTH_REQUEST,
  });

  try {
    const user = await postData("users", data);
    if (!user.error) {
      console.log(user);
      dispatch({
        type: types.USER_AUTH_SUCCESS,
        payload: user,
      });
    } else {
      dispatch({
        type: types.USER_AUTH_FAIL,
        payload: "Please enter a valid email.",
      });
    }
  } catch (err) {
    // dispatch({
    //   type: types.USER_AUTH_FAIL,
    //   payload: "Something went wrong.",
    // });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({
    type: types.USER_LOGOUT,
  });
};
