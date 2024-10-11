import React, { useState } from 'react';
import { addTask } from '../api'; // Import function for adding tasks

const AddTask = () => {
    const [description, setDescription] = useState('');
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { description };
        await addTask(taskData, token);
        setDescription(''); // Clear the field after adding
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New Task"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default AddTask;
