import React, { useEffect, useState } from "react";
import { useTodoList } from "./hooks";
import {
  Box,
  Heading,
  Input,
  Textarea,
  Button,
  Alert,
  AlertIcon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

function Tareas() {
  const [todo, setTodo] = useState({ name: "", description: "" });
  const [todoList, setTodoList] = useState([]);
  const [saveTodo, updateTodo, deleteTodo] = useTodoList(todoList, setTodoList);

  const nameValidation = !(todo.name.length === 0 || (todo.name.length > 0 && todo.name.length < 3));
  const formValidation = nameValidation;

  useEffect(() => {
    const storagedTodoList = localStorage.getItem("todoList");
    if (storagedTodoList) setTodoList(JSON.parse(storagedTodoList));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    if (formValidation) {
      saveTodo(todo);
      setTodo({ name: "", description: "" });
    }
  };

  return (
    <Box>
      <div className="flex-col">
        <Heading my={5} textAlign={"center"}>
          Tareas
        </Heading>
        <div className="w-[500px] mx-auto text-center bg-white p-5 mb-10">
          <form onSubmit={handleForm} className="form flex-col">
            <div className="flex flex-col">
              <Input
                mb={3}
                placeholder="Nombre"
                value={todo.name}
                onChange={(e) => setTodo({ ...todo, name: e.target.value })}
                isInvalid={!nameValidation}
              />
              {!nameValidation && todo.name.length > 0 && (
                <Alert status="error" mb={3}>
                  <AlertIcon />
                  El nombre debe tener al menos 3 caracteres.
                </Alert>
              )}
            </div>
            <Textarea
              mb={6}
              placeholder="Description"
              value={todo.description}
              onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            />
            <Button
              colorScheme="red"
              type="submit"
              isDisabled={!formValidation}
            >
              Crear Tarea
            </Button>
          </form>
        </div>
        <Box maxW="500px" mx="auto" textAlign="center">
          <Heading as="h2" mb={5}>Lista de Tareas</Heading>
          <UnorderedList>
            {todoList.map((task, index) => (
              <ListItem key={index} mb={2}>
                {task.name} - {task.description}{' '}
                <Button
                  size="sm"
                  colorScheme="red"
                  ml={2}
                  onClick={() => deleteTodo(task.name)}
                >
                  Eliminar
                </Button>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </div>
    </Box>
  );
}

export default Tareas;
