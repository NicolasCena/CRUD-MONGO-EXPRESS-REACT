interface Login {
    email: string;
    password: string;
}

interface Register extends Login{
    username: string;
}

interface AuthState {
    isLoggedin: boolean,
    error: string[],
    loading: boolean
}