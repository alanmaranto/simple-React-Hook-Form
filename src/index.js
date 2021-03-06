import React from 'react';
import ReactDOM from 'react-dom';
import SimpleForm from './SimpleForm';
import FormHook from './FormHooks';
import FormHookBasic from './FormHookBasic'
import FormHookErrors from './FormHookErrors'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <FormHook />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
