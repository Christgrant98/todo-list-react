export function useTodoList(todoList, setTodoList) {

  const saveTodo = (todoName) => {
    const newTodoList = [...todoList, { todoName }]
    localStorage.setItem("todoList", JSON.stringify(newTodoList))
    setTodoList(newTodoList);
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

  return [saveTodo, updateTodo, deleteTodo];
}