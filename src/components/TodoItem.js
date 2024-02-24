import React from "react";

// 할 일을 표시하고, 삭제하거나 완료 상태로 변경할 수 있는 기능
function Todo({ todo, onDeleteHandler, onCompleteHandler }) {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
          onClick={() => onDeleteHandler(todo.id)}
        >
          Delete
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onCompleteHandler(todo.id)}
        >
          {todo.isDone ? "Cancel" : "Done"}
        </button>
        </div>
    </div>
  );
}

export default Todo;
