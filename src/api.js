import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Your API address

// Function for registration
export const registerUser = async (username, password) => {
    const response = await axios.post(`${API_URL}/register`, {
        username,
        password
    });
    return response.data;
};

// Function to use during registration
export const handleRegister = async (e, username, password) => {
    e.preventDefault();
    await registerUser(username, password);
};

export const getTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data; // Returns the list of tasks
};

export const addTask = async (taskData) => {
    const response = await axios.post(`${API_URL}/tasks`, taskData);
    return response.data; // Returns the details of the added task
};

export const updateTask = async (taskId) => {
    const response = await axios.put(`${API_URL}/tasks/${taskId}`);
    return response.data; // Returns the updated task
};

export const deleteTask = async (taskId) => {
    await axios.delete(`${API_URL}/tasks/${taskId}`); // Deletes the task
};

