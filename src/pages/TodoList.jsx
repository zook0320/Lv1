import React, { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoCard from "../components/TodoCard";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);

  // 새로운 할 일 추가
  const addTodoHandler = ({ title, body }) => {
    const newTodo = {
      id: new Date().getTime() + 1,
      title: title,
      body: body,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
  };

  // 할 일 삭제
  const deleteTodoHandler = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // 할 일 완료 처리
  const completeTodoHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="container">
        <div> My Todo List </div>
      </div>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoCard
        todos={todos}
        deleteTodoHandler={deleteTodoHandler}
        completeTodoHandler={completeTodoHandler}
      />
      <footer className="footer"></footer>
    </>
  );
};

export default TodoList;
