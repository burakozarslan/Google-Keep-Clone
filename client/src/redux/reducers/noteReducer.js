import * as types from "../types";

const initialState = {
  notes: [],
  loading: false,
  error: null,
};

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NOTES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        loading: false,
        error: null,
      };
    case types.GET_NOTES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.ADD_NOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_NOTE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_NOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.UPDATE_NOTE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.DELETE_NOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_NOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.DELETE_NOTE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
