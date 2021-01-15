import * as types from "../types";
import {
  deleteData,
  fetchData,
  postData,
  updateData,
} from "./networkHelper/fetchData";
import uploadImage from "./networkHelper/uploadImage";

export const fetchNotes = () => async (dispatch) => {
  dispatch({
    type: types.GET_NOTES_REQUEST,
  });

  try {
    const notes = await fetchData("notes");

    if (notes.error) {
      dispatch({
        type: types.GET_NOTES_FAIL,
        payload: notes.error,
      });
    } else {
      dispatch({
        type: types.GET_NOTES_SUCCESS,
        payload: notes.data,
      });
    }
  } catch (error) {
    dispatch({
      type: types.GET_NOTES_FAIL,
      payload: error.message || "Something went wrong.",
    });
  }
};

export const addNote = (formData) => async (dispatch) => {
  dispatch({
    type: types.ADD_NOTE_REQUEST,
  });

  try {
    var formObject = formData;

    if (formObject.image) {
      const photoUrl = await uploadImage(formObject.image);
      formObject.image = photoUrl.data;
      console.log(photoUrl.data);
    }

    const response = await postData("notes", formObject);
    console.log(response);

    if (response.success) {
      dispatch({
        type: types.ADD_NOTE_SUCCESS,
      });

      dispatch(fetchNotes());
    } else {
      dispatch({
        type: types.ADD_NOTE_FAIL,
        payload: "Form fields can't be empty.",
      });
    }
  } catch (error) {
    dispatch({
      type: types.ADD_NOTE_FAIL,
      payload: "Something went wrong.",
    });
  }
};

export const updateNote = (formData, id) => async (dispatch) => {
  dispatch({
    type: types.UPDATE_NOTE_REQUEST,
  });

  try {
    var formObject = formData;

    if (formObject.image) {
      const photoUrl = await uploadImage(formObject.image);
      formObject.image = photoUrl.data;
    }

    await updateData("notes", formObject, id);

    dispatch({
      type: types.UPDATE_NOTE_SUCCESS,
    });

    dispatch(fetchNotes());
  } catch (error) {
    dispatch({
      type: types.UPDATE_NOTE_FAIL,
      payload: error.message || "Something went wrong.",
    });
  }
};

export const deleteNote = (id) => async (dispatch) => {
  dispatch({
    type: types.DELETE_NOTE_REQUEST,
  });

  try {
    await deleteData("notes", id);

    dispatch({
      type: types.DELETE_NOTE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: types.DELETE_NOTE_FAIL,
      payload: error.message || "Something went wrong.",
    });
  }

  dispatch(fetchNotes());
};
