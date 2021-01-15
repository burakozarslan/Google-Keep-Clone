import * as types from "../types";
import {
  fetchData,
  postData,
  deleteData,
  updateData,
} from "./networkHelper/fetchData";
import { fetchNotes } from "./noteAction";

export const fetchLabels = () => async (dispatch) => {
  dispatch({
    type: types.GET_LABELS_REQUEST,
  });

  try {
    const labels = await fetchData("labels");

    if (labels.error) {
      dispatch({
        type: types.GET_LABELS_FAIL,
        payload: labels.error,
      });
    } else {
      dispatch({
        type: types.GET_LABELS_SUCCESS,
        payload: labels.data,
      });
    }
  } catch (error) {
    dispatch({
      type: types.GET_LABELS_FAIL,
      payload: error.message || "Something went wrong.",
    });
  }
};

export const addLabel = (value) => async (dispatch) => {
  dispatch({
    type: types.ADD_LABEL_REQUEST,
  });

  try {
    let body = { title: value };

    await postData("labels", body);

    dispatch({
      type: types.ADD_LABEL_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: types.ADD_LABEL_FAIL,
      payload: error.message || "Something went wrong.",
    });
  }

  dispatch(fetchLabels());
};

export const deleteLabel = (id) => async (dispatch) => {
  dispatch({
    type: types.DELETE_LABEL_REQUEST,
  });

  try {
    await deleteData("labels", id);

    dispatch({
      type: types.DELETE_LABEL_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_LABEL_FAIL,
      payload: error.message || "Something went wrong.",
    });
  }

  dispatch(fetchLabels());
  dispatch(fetchNotes());
};

export const updateLabel = (value, id) => async (dispatch) => {
  dispatch({
    type: types.UPDATE_LABEL_REQUEST,
  });

  try {
    let body = { title: value };

    await updateData("labels", body, id);

    dispatch({
      type: types.UPDATE_LABEL_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: types.UPDATE_LABEL_FAIL,
      payload: error.message || "Something went wrong.",
    });
  }

  // Re-fetch labels
  dispatch(fetchLabels());
  dispatch(fetchNotes());
};
