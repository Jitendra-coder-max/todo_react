import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Button, TextField } from "@mui/material";
import todos from "../data/todos";
import TodoList from "./TodoList";

function TodoForm() {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    todos.push({ id: uuid(), task: newTodo });
   
  };

  return (
    <div>
      <br></br>
      <TextField
        label="Enter Todo"
        color="secondary"
        focused
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <br></br>
      <Button
        color="primary"
        disabled={false}
        size="large"
        variant="filled"
        onClick={handleAddTodo}
        >
               Add Todo

      </Button>
      <hr></hr>
        
        <TodoList />
        
      <hr></hr>
    </div>
  );
}

export default TodoForm;
