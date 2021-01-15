import * as types from "../types";

const initialState = {
  labels: [],
  loading: true,
  error: null,
};

export const labelReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LABELS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.GET_LABELS_SUCCESS:
      return {
        ...state,
        labels: action.payload,
        error: null,
        loading: false,
      };
    case types.GET_LABELS_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case types.ADD_LABEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.ADD_LABEL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.ADD_LABEL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.DELETE_LABEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.DELETE_LABEL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.DELETE_LABEL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case types.UPDATE_LABEL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.UPDATE_LABEL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case types.UPDATE_LABEL_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
