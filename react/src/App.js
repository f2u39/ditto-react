import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";
import { nanoid } from "nanoid";
import axios from 'axios';


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};

async function fetchTodos() {
  try {
    let response = await fetch('http://localhost:8080/api/todo');
    let responseJson = await response.json();
    return responseJson.todos;
   } catch(error) {
    console.log(error);
  }
}

const getTodos2 = () => {
  fetch('http://127.0.0.1:8080/api/todo', {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(function(response){
      // console.log(response)
      return response.json();
    }).then(function(myJson) {
      // console.log(myJson);
    });
}

  const getTodos3 = () => {
    fetch('http://127.0.0.1:8080/api/todo',)
      .then(function(response){
        // console.log(response)
        return response.json();
      }).then(function(json) {
        // onsole.log(json)
      });
  };

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  // const [tasks, setTasks] = useState(props.tasks);
  const [tasks, setTasks] = useState([]);
  // const [tasks, setTasks] = useState(getTodos3);
  const [filter, setFilter] = useState('All');

  // useEffect(async () => {
  //   const result = await axios(
  //     'http://127.0.0.1:8080/api/todo',
  //   );
  //   // console.log(result.data.todos);
  //   setTasks(result.data.todos);
  // });

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8080/api/todo',)
  //     .then(function(response){
  //       // console.log(response)
  //       return response.json();
  //     }).then(function(json) {
  //       console.log(json)
  //       setTasks(json.todos);
  //     });
  // }, []);

  useEffect(() => { fetchTodos() }, []);

  function fetchTodos() {
    fetch('http://127.0.0.1:8080/api/todo',)
      .then(function(response){
        return response.json();
      }).then(function(json) {
        setTasks(json.todos);
      });
  }

  // console.log(tasks);

  async function toggleCompleted(id) {
    const data = new FormData();
    data.append("id", id);

    fetch('http://localhost:8080/api/todo/toggle', {
      method: 'POST',
      body: data,
    }).then(response => {
      if (response.ok) {
        console.log("Toggled!");
      } else {
        console.log("Failed to toggle!");
      }
    });
    
    fetchTodos();
  }

  async function deleteTodo(id) {
    const data = new FormData();
    data.append("id", id);

    fetch('http://localhost:8080/api/todo/delete', {
      method: 'DELETE',
      body: data,    
    }).then(response => {
      if (response.ok) {
        console.log("Deleted!");
      } else {
        console.log("Failed to delete!");
      }
    });
    
    fetchTodos();
  }

  async function updateTodo(id, newContent, completed) {
    let body = {
      Id: id,
      Content: newContent,
      Completed: completed,
    }

    const response = await fetch('http://localhost:8080/api/todo/update', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) {
      let errorText = 'Failed to update todo.';
      if (!data.hasOwnProperty('error')) {
        throw new Error(errorText);
      }
    }
    
    // fetchTodos();
    fetch('http://127.0.0.1:8080/api/todo',)
        .then(function(response){
          // console.log(response)
          return response.json();
        }).then(function(json) {
          console.log(json);
          setTasks(json.todos);
        });
    // setTasks(fetchTodos());
  }

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map(task => (
    <Todo
      id={task.id}
      content={task.content}
      completed={task.completed}
      key={task.id}
      toggleCompleted={toggleCompleted}
      deleteTodo={deleteTodo}
      updateTodo={updateTodo}
    />
  ));

  const filterList = FILTER_NAMES.map(content => (
    <FilterButton
      key={content}
      name={content}
      isPressed={content === filter}
      setFilter={setFilter}
    />
  ));

  function addTask(content) {
    const newTask = { id: "todo-" + nanoid(), content: content, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="todoapp stack-large">
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
        {headingText}
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>

      <hr />

      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/preferences" element={<Preferences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;