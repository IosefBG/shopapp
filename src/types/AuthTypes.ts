export interface User {
    id: string;
    username: string;
    email: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
}

export type AuthAction =
    | { type: 'LOGIN'; payload: { user: User } }
    | { type: 'LOGOUT' };

export type AuthContextType = AuthState & {
    login: (user: User) => void;
    logout: () => void;
};
