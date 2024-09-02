import {AuthAction, AuthState} from "../types/AuthTypes.ts";

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                token: action.payload.token,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
};

export default authReducer;
