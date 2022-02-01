import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
<<<<<<< HEAD
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
});

// List of all the endpoints
export const sendOtp = (data) => api.post('/api/send-otp', data);
export const verifyOtp = (data) => api.post('/api/verify-otp', data);
export const activate = (data) => api.post('/api/activate', data);
export default api;
=======
    headers: {
        'Content-type': 'application/json',
        Accept:'application/json',
    },
    
})

//list of all the end points
export const sendOtp = (data) => api.post('/api/send-otp', data);
export const verifyOtp = (data) => api.post('/api/verify-otp',data);
export default api;
>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973
