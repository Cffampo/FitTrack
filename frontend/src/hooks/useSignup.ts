import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { User } from '../types';

export const useSignup = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { dispatch } = useAuthContext();

    const signup = async (email: string, password: string) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const json: User & { error?: string } = await response.json(); //this is either a full User, or an error object — not both, and not some hybrid."

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error ?? 'Signup failed');
        }

        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json));
            dispatch({ type: 'LOGIN', payload: json });
            setIsLoading(false);
        }
    }

    return { signup, isLoading, error };
}