import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000', 
});

export const fetchTasks = async () => {
    const response = await api.get('/tasks');
    return response.data;
};

export default api;

