import React, {Fragment} from 'react';
import './App.css';
// components
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo'

function App() {
  return (
    <Fragment>
      <div className = "container">
        <CreateTodo />
        <ListTodo />
      </div>
      
    </Fragment>
    
  );
}

export default App;
