import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TextInputWithFocusButton from "./components/TextInputWithFocusButton";


const DATA = [
  { id: "todo-0", content: "Eat", completed: true },
  { id: "todo-1", content: "Sleep", completed: false },
  { id: "todo-2", content: "Repeat", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);