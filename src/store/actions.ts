import {SETPASSWORD, SETUSERNAME} from "../constents";

export const registUsername = (data: Data) => ({type: SETUSERNAME, data});
export const registPassword = (data: Data) => ({type: SETPASSWORD, data});