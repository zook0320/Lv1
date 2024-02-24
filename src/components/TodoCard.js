import React from "react";
import TodoItem from "./TodoItem";

const TodoCard = ({ todos, deleteTodoHandler, completeTodoHandler }) => {
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                onDeleteHandler={deleteTodoHandler}
                onCompleteHandler={completeTodoHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                onDeleteHandler={deleteTodoHandler}
                onCompleteHandler={completeTodoHandler}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default TodoCard;
