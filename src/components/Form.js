import React, { useState } from "react";

function Form(props) {
  const [content, setContent] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();
    if (!content.trim()) {
      return;
    }

    let body = {
      Content: content,
      Completed: false,
    }

    // console.log(body);

    const response = await fetch('http://localhost:8080/api/todo/create', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    if (!response.ok) {
      let errorText = 'Failed to create todo.';
      if (!data.hasOwnProperty('error')) {
        throw new Error(errorText);
      }
    }

    // props.addTask(name);
    // setName("");
  }


  function handleChange(e) {
    setContent(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>

      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={content}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;