import axios from 'axios';
import initInterceptors from './interceptors';

const api = axios.create({
    timeout: 60000,
});

initInterceptors(api);

export default api;