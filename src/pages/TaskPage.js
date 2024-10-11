import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';
import axios from '../services/api';

function TaskPage () {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const response = await axios.get('/tasks');
            setTasks(response.data);
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <Navbar />
            <h1>Tasks</h1>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default TaskPage;

