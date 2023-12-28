import { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";
// import TodoList from "./components/TodoList";


function App() {
  const [todo, setTodo]=useState("")
  const todos= todo
  return (
    <div className="App">
      <TodoForm />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
