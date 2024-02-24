// TodoForm.js
import React, { useState } from "react";
//새로운 할 일을 추가하는 데 사용되는 입력 폼

const TodoForm = ({ addTodoHandler }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleAddTodo = () => {
    if (!title.trim() || !body.trim()) return;

    addTodoHandler({ title, body });

    setTitle("");
    setBody("");
  };

  return (
    <div className="add-form">
      <div className="form">
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="To-do"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
};

export default TodoForm;
