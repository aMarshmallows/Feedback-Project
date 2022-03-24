import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// this is the brains file - all things have index.css because we imported it here - it's a global styles sheet
ReactDOM.render(<App></App>, document.getElementById('root'));
