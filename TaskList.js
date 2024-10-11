import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask } from '../api'; // ייבוא הפונקציות לקבלת משימות ומחיקתן
import AddTask from './AddTask'; // ייבוא רכיב הוספת משימות

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await getTasks(token);
            setTasks(response.data);
        };
        fetchTasks();
    }, [token]);

    const handleDelete = async (id) => {
        await deleteTask(id, token);
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h2>Your Tasks</h2>
            <AddTask /> {/* רכיב הוספת משימות */}
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.description}
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
