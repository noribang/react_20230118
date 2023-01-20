import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const element = <h1 id="header" className="blue">This is JSX!!!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    element
    // <>
    //   <h1>Directly in render</h1>
    //   <p>Added p element</p>
    // </>
    // <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
