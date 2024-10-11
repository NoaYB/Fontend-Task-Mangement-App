import React from 'react';
import TaskList from '../components/TaskList';

function HomePage() {
    const tasks = [
        { id: 1, title: 'Task 1', description: 'Description for Task 1' },
        { id: 2, title: 'Task 2', description: 'Description for Task 2' },
    ];

    return (
        <div>
            <h1>Tasks</h1>
            <TaskList tasks={tasks} />
        </div>
    );
}

export default HomePage;

