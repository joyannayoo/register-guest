import { combineReducers } from "redux";
import guests from "./GuestsReducer";
import auth from "./LoginReducer";


const rootReducer = combineReducers({
  guests, auth,
});

export default rootReducer;
