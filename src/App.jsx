import { useEffect, useState } from "react";
import "./index.css"; // Importa el archivo CSS
import { useTodoList } from "./hooks";

function Header() {
  return <h1 className="header">Todo List</h1>;
}

function Task({ index, todo, updateTodo, onDelete }) {
  
  return (
    <li className="task">
      <div className="flex flex-col flex-1">
        <div className="flex">
          <div className="flex-1 flex-col items-end content-end">
            <span className="ml-3 self-end" onClick={onDelete}>X</span>
            <input
              className="border-2 rounded-lg p-5 bg-black text-white w-[100%]"
              type="text"
              placeholder="Add Todo"
              value={todo.name}
              onChange={(e) => updateTodo(index, {...todo, name: e.target.value})}
            />
          </div>
        </div>
        <div>
          <textarea
            className="w-100 border-white bg-black border-2 rounded-lg p-5 mt-5 text-white w-[100%]"
            placeholder="Description"
            style={{resize: 'none'}}
            value={todo.description}
            onChange={(e) => updateTodo(index, {...todo, description: e.target.value})}
          />
        </div>
      </div>
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
            todo={singleTodo}
            onDelete={() => onDelete(singleTodo.name)}
          />
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [todo, setTodo] = useState({name: '', description: ''});
  const [todoList, setTodoList] = useState([]);
  const [saveTodo, updateTodo, deleteTodo] = useTodoList(todoList, setTodoList);

  const nameValidation = !(todo.name.length == 0 || (todo.name.length > 0 && todo.name.length < 3));
  const formValidation = nameValidation;
  useEffect(() => {
    const storagedTodoList = localStorage.getItem("todoList");
    if(storagedTodoList) setTodoList(JSON.parse(storagedTodoList));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    saveTodo(todo);
    setTodo({name: '', description: ''});
  };


  return (
    <div className="container">
      <div className="flex-col">
        <div className="w-[500px] mx-auto text-center bg-white p-5 mb-10">
          <form onSubmit={handleForm} className="form flex-col">
            <div className="flex flex-col">
              <input
                style={{marginRight: 0}}
                className="border-2 rounded-lg p-5 text-black flex-1"
                type="text"
                placeholder="Name"
                value={todo.name}
                onChange={(e) => setTodo(todo => ({...todo, name: e.target.value}))}
              />
              <span className="self-start text-[red]">{(!nameValidation) ? 'It has to be larger than 3 letters' : ''}</span>
            </div>
            <textarea
              className="w-100 border-black border-2 rounded-lg p-5 mt-10 text-black w-[100%]"
              placeholder="Description"
              style={{resize: 'none'}}
              value={todo.description}
              onChange={(e) => setTodo(todo => ({...todo, description: e.target.value}))}
            />
            <button disabled={!formValidation} className={`${formValidation ? "bg-[red]" : "bg-[gray]"} p-5 rounded-lg text-white text-2xl mt-10`} type="submit">Add Todo</button>
          </form>
        </div>
        <div className="w-[500px] mx-auto text-center bg-white p-5">
          <Header />
          <TaskList todoList={todoList} updateTodo={updateTodo} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}

export default App;
