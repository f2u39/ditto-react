import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { ThemeProvider } from './contexts/theme';
import App from './App';

const DATA = [
  { id: "todo-0", content: "Eat", completed: true },
  { id: "todo-1", content: "Sleep", completed: false },
  { id: "todo-2", content: "Repeat", completed: false }
];

// ReactDOM.render(
//   <React.StrictMode>
//     {/* <App tasks={DATA} /> */}
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);