import { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import { NameContext } from "../NameContext";
import { useContext } from "react";
import todos from "../data/todos";

function TodoList() {
  const [newTodo, setNewTodo] = useState([]);

  const name = useContext(NameContext);

  useEffect(() => {

    console.log("Clicked")
    setNewTodo(todos);
  }, [todos]);

  return (
    <div>
      <h2>Here are your todos, {name}</h2>
      <Stack spacing={ 1  } divider={<Divider orientation="horizontal" />}>
        {/* {newTodo.map((item) => {
          return <p key={item.id}>{item.task}</p>;
        })} */}

       {
          newTodo.map((item)=> (
             <li key={item.id }>{item.task}</li>
           ))
        }
      </Stack>
    </div>
  );
}

export default TodoList;
