import { createContext, useReducer, useEffect, ReactNode, Dispatch } from 'react';
import { User } from '../types';

interface AuthState {
    user: User | null;
}

type AuthAction =
    | { type: 'LOGIN'; payload: User }
    | { type: 'LOGOUT' };

interface AuthContextType extends AuthState {
    dispatch: Dispatch<AuthAction>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload };
        case 'LOGOUT':
            return { user: null };
        default:
            return state;
    }
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    });
    
    useEffect(() => {
        const userJSON = localStorage.getItem('user');
        const user: User | null = userJSON ? JSON.parse(userJSON) : null;

        if (user) {
            dispatch({ type: 'LOGIN', payload: user });
        }
    }, []);

    console.log('AuthContext state:', state);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}