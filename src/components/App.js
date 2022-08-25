
import { useState } from 'react';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { data } from "./data/todo";
import List from "./List";

function App() {
  const [todos, setToDos] = useState(data);

  const create = title =>{
    const new_todo = {
      id: Date.now(),
      title,
      done: false
    };
    const new_state = [...todos, new_todo];
    setToDos(new_state);
  }

  const del = id => setToDos(todos.filter(elem => elem.id !== id));

  const change_done = id =>{
    const new_state = todos.map(elem =>{
        if (elem.id === id){
            elem.done = !elem.done;
        }
        return elem
    });
    setToDos(new_state);
  }

  return (
    <div>
      <ToDoForm create={create}/>
      <ToDoList todos={todos} del={del} change_done={change_done}/>
      {/* <UsersList /> */}
      {/* <User name={"Гайк"} lastname={"Инанц"} /> */}
      {/* <Counter /> */}
      <List />

    </div>
  );
}

export default App;

