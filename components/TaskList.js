import React, { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from '../api'; // Import functions

const TaskList = () => {
    const [tasks, setTasks] = useState([]); // State to store tasks
    const [newTask, setNewTask] = useState(''); // State to store new task

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksFromAPI = await getTasks(); // Fetch tasks from the API
                console.log('Fetched tasks:', tasksFromAPI); // Log the fetched tasks
                setTasks(tasksFromAPI); // Update tasks state
            } catch (error) {
                console.error('Error fetching tasks:', error); // Handle errors
            }
        };
        fetchTasks();
    }, []); // Runs only once when the component is mounted

    const handleAddTask = async (e) => {
        e.preventDefault(); // Prevent page refresh
        const taskData = { description: newTask, completed: false }; // Define task data
        const addedTask = await addTask(taskData); // Add task to the API
        setTasks([...tasks, addedTask]); // Update task list
        setNewTask(''); // Clear input field
    };

    const handleUpdateTask = async (taskId) => {
        const updatedTask = await updateTask(taskId); // Update the task
        setTasks(tasks.map(task => (task.id === taskId ? updatedTask : task))); // Update state with the updated task
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId); // Delete the task
        setTasks(tasks.filter(task => task.id !== taskId)); // Update the list
    };

    return (
        <div>
            <h2>Your Tasks</h2>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} // Update the input field
                    required
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
