import {SETPASSWORD, SETUSERNAME} from "../../constents";

const initial = {username: "", password: ""};

export const registerReducer = (preState = initial, actions: { type: string, data: Data }) => {
    const {type, data} = actions;
    switch (type) {
        case SETUSERNAME :
            return {...preState,...data};
        case SETPASSWORD:
            return {...preState,...data};
        default:
            return preState;
    }
};