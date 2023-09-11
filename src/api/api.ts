import axios from 'axios';

export const AuthService = axios.create({
    baseURL : import.meta.env.VITE_AUTH_SERVICE
});

export const ResourceService = axios.create({
    baseURL : import.meta.env.VITE_RESOURCE_SERIVE
})
