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

function Tasks() {
  const [task, setTask] = useState({ name: "", description: "" });
  const [taskList, setTaskList] = useState([]);
  const [saveTask, updateTask, deleteTask] = useTodoList(taskList, setTaskList);

  const nameValidation = !(task.name.length === 0 || (task.name.length > 0 && task.name.length < 3));
  const formValidation = nameValidation;

  useEffect(() => {
    const storedTaskList = localStorage.getItem("taskList");
    if (storedTaskList) setTaskList(JSON.parse(storedTaskList));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    if (formValidation) {
      saveTask(task);
      setTask({ name: "", description: "" });
    }
  };

  return (
    <Box>
      <div className="flex-col">
        <Heading my={5} textAlign={"center"}>
          Tasks
        </Heading>
        <div className="w-[500px] mx-auto text-center bg-white p-5 mb-10">
          <form onSubmit={handleForm} className="form flex-col">
            <div className="flex flex-col">
              <Input
                mb={3}
                placeholder="Name"
                value={task.name}
                onChange={(e) => setTask({ ...task, name: e.target.value })}
                isInvalid={!nameValidation}
              />
              {!nameValidation && task.name.length > 0 && (
                <Alert status="error" mb={3}>
                  <AlertIcon />
                  The name must have at least 3 characters.
                </Alert>
              )}
            </div>
            <Textarea
              mb={6}
              placeholder="Description"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
            <Button
              colorScheme="red"
              type="submit"
              isDisabled={!formValidation}
            >
              Create Task
            </Button>
          </form>
        </div>
        <Box maxW="500px" mx="auto" textAlign="center">
          <Heading as="h2" mb={5}>Task List</Heading>
          <UnorderedList>
            {taskList.map((task, index) => (
              <ListItem key={index} mb={2}>
                {task.name} - {task.description}{' '}
                <Button
                  size="sm"
                  colorScheme="red"
                  ml={2}
                  onClick={() => deleteTask(task.name)}
                >
                  Delete
                </Button>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
      </div>
    </Box>
  );
}

export default Tasks;
