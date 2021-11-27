export interface State {
    register: RegisterState;
}

export interface RegisterState {
    username: string;
    password: string;
}