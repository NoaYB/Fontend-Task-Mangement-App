import React from 'react';
import ReactDOM from 'react-dom/client'; // עדכון לייבוא createRoot
import App from './App'; // ייבוא רכיב ה-App שלך

// מציאת אלמנט ה-root בדף ה-HTML
const rootElement = document.getElementById('root');

// יצירת root עם createRoot
const root = ReactDOM.createRoot(rootElement);

// רינדור רכיב ה-App
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
