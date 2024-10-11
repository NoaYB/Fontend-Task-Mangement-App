import React, { useState } from 'react';
import { addTask } from '../api'; // ייבוא הפונקציה להוספת משימות

const AddTask = () => {
    const [description, setDescription] = useState('');
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { description };
        await addTask(taskData, token);
        setDescription(''); // לנקות את השדה לאחר הוספה
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
