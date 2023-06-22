import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  page: pageReducer,
  modal: modalReducer,
});
