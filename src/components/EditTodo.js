import React, { Fragment, useState} from 'react';

const EditTodo = ({todo}) =>{
    const [description, setDescription] = useState(todo.description)
    const updateTodo = async (e) =>{
        e.preventDefault();
        try {
            console.log("click")
            const body = {description};
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`,{
                method: "PUT",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify(body)
            });
            window.location="/";
            console.log(response)
        } catch (error) {
            console.error(error.message)
            
        }

    }
    return(
        <Fragment>
          
<button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${todo.todo_id}`}>
  Edit
</button>


<div class="modal fade"  onClick={() => setDescription(todo.description)} id={`id${todo.todo_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Todo</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setDescription(todo.description)}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input  className="form-control" 
                value={description}
                onChange={e => setDescription(e.target.value)}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
        <button onClick={e => updateTodo(e)} type="button" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</div>
        </Fragment>
    )

};
export default EditTodo;