import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.classList.toggle('open');  // Toggle the "open" class
});