
import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom'; // Revert to using react-dom for compatibility
import App from './components/App';

if (document.getElementById('root')) {
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root')
    );
}