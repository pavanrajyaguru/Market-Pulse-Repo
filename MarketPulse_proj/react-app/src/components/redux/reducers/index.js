import { combineReducers } from "redux";
import Reducers from "./Reducers"

const rootReducer = combineReducers({
    auth : Reducers
});

export default rootReducer;