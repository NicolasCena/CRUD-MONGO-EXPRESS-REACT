import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export const useAuth = () => {

    const { registerUser, authState, resetError, loginUser } = useContext( AuthContext );
    const { isLoggedin, error, loading } = authState;

    return {
        isLoggedin,
        registerUser,
        error,
        loading,
        resetError,
        loginUser
    }
}