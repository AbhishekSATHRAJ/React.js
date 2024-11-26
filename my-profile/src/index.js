import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Home from './Home1.js';
// import Main from './Main1.jsx';
import Profile from './profile.js';
// import Profolio from './profolio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    {/* <Main /> */}
    <Profile name="mohan"/>
    {/* <Profolio/> */}
   </React.StrictMode></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
