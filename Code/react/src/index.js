import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// Context
// Styles
import './styles/index.css';
import './styles/display1.css';
import './styles/components.css';
import './styles/keyframes.css';
import './styles/orbitAnimation.css';
import './styles/style.css';
import './styles/race.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
