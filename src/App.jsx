import { useState } from "react";
import "./index.css"; // Importa el archivo CSS

function Header() {
  return <h1 className="header">Todo List</h1>;
}

function Task({ todoName, onDelete }) {
  return (
    <li className="task">
      {todoName}
      <span onClick={onDelete}>x</span>
    </li>
  );
}

function TaskList({ todoList, onDelete }) {
  return (
    <div className="task-list">
      <ul>
        {todoList.map((singleTodo, index) => (
          <Task
            key={index}
            todoName={singleTodo.todoName}
            onDelete={() => onDelete(singleTodo.todoName)}
          />
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  };

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.todoName !== deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  };

  return (
    <div className="container">
      <div className="w-[500px] mx-auto text-center bg-white p-5">
        <Header />
        <form onSubmit={handleForm} className="form">
          <input
            className="border-2 rounded-lg p-5 text-black"
            type="text"
            placeholder="Add Todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">+</button>
        </form>
        <TaskList todoList={todoList} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
