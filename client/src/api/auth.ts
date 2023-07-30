import axios from './axios';

const API = 'http://localhost:3000/api';

export const registerRequest = ( user: Register ) => axios.post(`${API}/register`, user)

export const loginRequest = ( user: Login ) => axios.post(`${API}/login`, user)

export const profileRequest = () => axios.post(`${API}/profile`)