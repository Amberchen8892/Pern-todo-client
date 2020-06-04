import React, {Fragment, useEffect, useState} from 'react';
import EditTodo from './EditTodo';

const ListTodo = ()  =>{
    const [todos, setTodos] = useState([]);
    const deleteTodo =  async (id) =>{
        try {
            const deleteTodo = await fetch (`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            })
            setTodos(todos.filter(todo =>todo.todo_id !== id))
            console.log(deleteTodo)
            
        } catch (error) {
            console.error(error.message)
            
        }
    }
    const getTodos = async () =>{
        try {
            const response = await fetch ("http://localhost:5000/todos")
            const jsonData = await response.json()
            setTodos(jsonData)
            
        } catch (error) {
            console.log(error.message)
            
        }
    }
    useEffect( () =>{
        getTodos();
    },[]);
    

    return (
        <Fragment>
            <table class="table mt-5">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
      
    </tr>
  </thead>
  <tbody>
  {todos.map(todo => (
      
      <tr>
          <td>{todo.todo_id}</td>
          <td>{todo.description}</td>
          <td><EditTodo todo={todo}/></td>
          <td><button  onClick={()=> deleteTodo(todo.todo_id)} className="btn btn-danger">Delete</button></td>
      </tr>
  ))}
  </tbody>
</table>
        </Fragment>
    ) 
}
export default ListTodo;