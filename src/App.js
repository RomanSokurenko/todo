import React from "react";
import TodoList from "./Todo/TodoList";
import Buffer from "./buffer";
import AddTodo from "./Todo/AddTodo";

function App() {
  const [todos, setTodos] = React.useState([]);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }
  return (
    <Buffer.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todushe4ka</h1>
        <AddTodo onCreate={addTodo} />

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>У вас не має заміток!</p>
        )}
      </div>
    </Buffer.Provider>
  );
}

export default App;
