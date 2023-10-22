import { useEffect, useState } from "react";
import "./index.css"; // Importa el archivo CSS

function Header() {
  return <h1 className="header">Todo List</h1>;
}

function Task({ index, todoName, updateTodo, onDelete }) {
  
  return (
    <li className="task">
      <input
        className="border-2 rounded-lg p-5 bg-black text-white w-[90%]"
        type="text"
        placeholder="Add Todo"
        value={todoName}
        onChange={(e) => updateTodo(index, e.target.value)}
      />
      <span onClick={onDelete}>x</span>
    </li>
  );
}

function TaskList({ todoList, onDelete, updateTodo }) {
  return (
    <div className="task-list">
      <ul>
        {todoList.map((singleTodo, index) => (
          <Task
            index={index}
            key={index}
            updateTodo={updateTodo}
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


  useEffect(() => {
    const storagedTodoList = localStorage.getItem("todoList");
    if(storagedTodoList) setTodoList(JSON.parse(storagedTodoList));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    const newTodoList = [...todoList, { todoName: todo }]
    localStorage.setItem("todoList", JSON.stringify(newTodoList))
    setTodoList(newTodoList);
    setTodo("");
  };

  const updateTodo = (index, todoName) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {todoName}
    localStorage.setItem("todoList", JSON.stringify(newTodoList))
    setTodoList(newTodoList)
  }

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.todoName !== deleteValue;
      }),
    ];
    localStorage.setItem("todoList", JSON.stringify(restTodoList))
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
        <TaskList todoList={todoList} updateTodo={updateTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
