import { combineReducers } from "redux";
import { noteReducer } from "./noteReducer";
import { labelReducer } from "./labelReducer";
import { tabReducer } from "./tabReducer";
import { userReducer } from "./userReducer";

export default combineReducers({
  note: noteReducer,
  label: labelReducer,
  tab: tabReducer,
  user: userReducer,
});
