import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TaskPage from './pages/TaskPage';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';

const App = () => {
    console.log("testing");
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/register" element={<RegisterForm/>} />
                <Route path="/tasks" element={<TaskPage />} />
            </Routes>
        </Router>
    );
};

export default App;

