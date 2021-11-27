import {createStore, combineReducers} from "redux";
import {registerReducer} from "./reducers/register";

const allReducer = combineReducers({register: registerReducer});

export default createStore(allReducer);