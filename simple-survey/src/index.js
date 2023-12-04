import React from 'react';
import ReactDOM from 'react-dom/client';
import Survey from './Survey.js';
import './simple-survey.css';

document.title = 'Simple Survey';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Survey />);