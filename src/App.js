import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // ודא שהייבוא נכון
import Register from './components/Register';
import Login from './components/Login';
import TaskList from './components/TaskList';

const App = () => {
    return (
        <Router>
            <Routes> {/* Here we add tasklist */}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/tasks" element={<TaskList />} />
            </Routes>
        </Router>
    );
};

export default App;

