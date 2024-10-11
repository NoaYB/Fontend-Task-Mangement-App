import React, { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from '../api'; // ייבוא הפונקציות

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const fetchTasks = async () => {
            const tasksFromAPI = await getTasks();
            setTasks(tasksFromAPI);
        };
        fetchTasks();
    }, []);

    const handleAddTask = async (e) => {
        e.preventDefault();
        const taskData = { description: newTask, completed: false };
        const addedTask = await addTask(taskData);
        setTasks([...tasks, addedTask]);
        setNewTask('');
    };

    const handleUpdateTask = async (taskId) => {
        // כאן תוכל להוסיף לוגיקה לעדכון המשימה
        const updatedTask = await updateTask(taskId);
        setTasks(tasks.map(task => (task.id === taskId ? updatedTask : task)));
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId);
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <h2>Your Tasks</h2>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    required
                    placeholder="Add a new task" // טקסט רמז בטופס
                />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.description} - {task.completed ? 'Complete' : 'Incomplete'}
                        <button onClick={() => handleUpdateTask(task.id)}>Update</button>
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;

