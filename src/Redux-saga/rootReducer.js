import { combineReducers } from "redux";
import Ereducer from "./Admin/Reducer/Election/reducer";
import PReducer from "./Admin/Reducer/Party/reducer"

const rootReducer = combineReducers({
    Ereducer,
    PReducer,
});

export default rootReducer;