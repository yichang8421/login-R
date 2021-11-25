import {createStore} from "redux";
import {registerReducer} from "./reducer";

// @ts-ignore
export default createStore(registerReducer);