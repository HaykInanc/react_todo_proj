import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";
import { data } from "./data/todo";

import UsersList from "./UsersList";
import Counter from "./Counter";
import User from "./User";

function App() {
  return (
    <div>
      <ToDoForm />
      <ToDoList data={data}/>
      <UsersList />
      {/* <User name={"Гайк"} lastname={"Инанц"} /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;

