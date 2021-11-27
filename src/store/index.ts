import {createStore} from "redux";
import {registerReducer} from "./reducer";

export default createStore(registerReducer);