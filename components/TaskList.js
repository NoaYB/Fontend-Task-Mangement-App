import React, { useEffect, useState } from 'react';
import { getTasks, addTask, updateTask, deleteTask } from '../api'; // ייבוא הפונקציות

const TaskList = () => {
    const [tasks, setTasks] = useState([]); // מצב לאחסון משימות
    const [newTask, setNewTask] = useState(''); // מצב לאחסון משימה חדשה

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const tasksFromAPI = await getTasks(); // קבלת המשימות מה-API
                console.log('Fetched tasks:', tasksFromAPI); // לוג של המשימות המתקבלות
                setTasks(tasksFromAPI); // עדכון מצב המשימות
            } catch (error) {
                console.error('Error fetching tasks:', error); // טיפול בשגיאות
            }
        };
        fetchTasks();
    }, []); // רץ רק בפעם הראשונה שהרכיב נטען

    const handleAddTask = async (e) => {
        e.preventDefault(); // מניעת רענון דף
        const taskData = { description: newTask, completed: false }; // הגדרת נתוני המשימה
        const addedTask = await addTask(taskData); // הוספת המשימה ל-API
        setTasks([...tasks, addedTask]); // עדכון רשימת המשימות
        setNewTask(''); // ניקוי שדה הקלט
    };

    const handleUpdateTask = async (taskId) => {
        const updatedTask = await updateTask(taskId); // עדכון המשימה
        setTasks(tasks.map(task => (task.id === taskId ? updatedTask : task))); // עדכון המצב עם המשימה המעודכנת
    };

    const handleDeleteTask = async (taskId) => {
        await deleteTask(taskId); // מחיקת המשימה
        setTasks(tasks.filter(task => task.id !== taskId)); // עדכון הרשימה
    };

    return (
        <div>
            <h2>Your Tasks</h2>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)} // עדכון השדה
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
