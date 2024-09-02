export interface User {
    id: string;
    email: string;
}

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
}

export type AuthAction =
    | { type: 'LOGIN'; payload: { user: User; token: string } }
    | { type: 'LOGOUT' };

export type AuthContextType = AuthState & {
    login: (user: User, token: string) => void;
    logout: () => void;
};
