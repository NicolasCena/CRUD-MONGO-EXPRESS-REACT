type TodoAction = 
    | { type: 'LOGIN_USER', payload: boolean }
    | { type: 'SET_ERROR', payload: string[] | [] }
    | { type: 'SET_LOADING', payload: boolean }


export const authReducer = ( state: AuthState, action: TodoAction ): AuthState => {

    switch ( action.type ) {
        case 'LOGIN_USER':
            return {
                ...state,
                isLoggedin: action.payload
            }
        case 'SET_ERROR':
            return {
                ...state,
                error: [...action.payload]
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }

}