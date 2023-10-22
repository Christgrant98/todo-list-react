export function useTodoList(todoList, setTodoList) {

  const saveTodo = (todo) => {
    const newTodoList = [...todoList, { ...todo }]
    localStorage.setItem("todoList", JSON.stringify(newTodoList))
    setTodoList(newTodoList);
  };

  const updateTodo = (index, todo) => {
    const newTodoList = [...todoList];
    newTodoList[index] = {...todo}
    localStorage.setItem("todoList", JSON.stringify(newTodoList))
    setTodoList(newTodoList)
  }

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.name !== deleteValue;
      }),
    ];
    localStorage.setItem("todoList", JSON.stringify(restTodoList))
    setTodoList(restTodoList);
  };

  return [saveTodo, updateTodo, deleteTodo];
}