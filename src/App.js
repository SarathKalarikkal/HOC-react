import React from "react"
import './App.css';
import SearchUser from './components/UserList';
import SearchTodos from './components/TodoList';


function App() {
  return (
    <div className="App">
     <SearchUser />
     <SearchTodos />
    </div>
  );
}

export default App;
