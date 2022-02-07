import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (name, age) => {
    setUsers((prev) => {
      return [...prev, {name: name, age: age, id: Math.random().toString()}]
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={users}/>
    </>
  );
}

export default App;
