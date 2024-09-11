import React, {createContext, useContext, useReducer, ReactNode} from 'react';
import authReducer from './authReducer';
import {LOGIN, LOGOUT} from './authActions';
import {AuthContextType, User} from "../types/AuthTypes.ts";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: null,
    });

    const login = (user: User) => {
        dispatch({type: LOGIN, payload: {user}});
    };

    const logout = () => {
        dispatch({type: LOGOUT});
    };

    return (
        <AuthContext.Provider value={{...state, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
