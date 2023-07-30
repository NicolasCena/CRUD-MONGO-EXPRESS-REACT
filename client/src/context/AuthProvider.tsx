import { useEffect, useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { loginRequest, registerRequest } from '../api/auth';
import Cookie from 'js-cookie';

const INITIAL_STATE = {
  isLoggedin: false,
  error: [],
  loading: false
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

// Proveedor de contexto de autenticación
export const AuthProvider = ({ children }: Props) => {

    const [ authState, dispatch] = useReducer( authReducer, INITIAL_STATE );

    /**
     * @description Función para hacer el registro del usuario
    */
    const registerUser = async (user: Register) => {
      try {
        const res = await registerRequest(user);
    
        if (res.status === 200) {
          // La solicitud fue exitosa, puedo procesar los datos recibidos
          const { password, email } = user;
          const login = await loginRequest({ password, email })

          if(!!login){
            dispatch({ type: 'LOGIN_USER', payload: true})
          }

        } else {
          // La solicitud tuvo éxito, pero el contenido tiene un error
          console.log("res", res)
          console.error('Error en la respuesta:', res.status, res.statusText);
        }
      } catch (error: any) {
        dispatch({ type: 'SET_ERROR', payload: error?.response?.data?.error})
      }
    };

    /**
     * @description Función para hacer el log in del usuario
    */
    const loginUser = async (user: Login) => {
      try {
        const { password, email } = user;
        const res = await loginRequest({ password, email })

        if(!!res) return dispatch({ type: 'LOGIN_USER', payload: true})
    
      } catch (error: any) {
        dispatch({ type: 'SET_ERROR', payload: error?.response?.data?.error})
      }
    };

    /**
     * @description Función para hacer setear los errores
    */
    const resetError = () => {
      dispatch({ type: 'SET_ERROR', payload: [] });
    };

    useEffect(() => {
      const cookies = Cookie.get()
      console.log(cookies)
    }, [])
    
    
    return (
      <AuthContext.Provider value={{
        authState,
        registerUser,
        resetError,
        loginUser
      }}>
        {children}
      </AuthContext.Provider>
    );
  };
  