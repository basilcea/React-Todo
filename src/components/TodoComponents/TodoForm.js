import React from 'react';

const TodoForm = (task ,changeHandler , addTodo , completedTodo) =>{
    return(
        <div>
           <input
           value={task}
           onClick ={changeHandler}
           type ='text'
           /> 
           <button onClick={addTodo}>Add todo</button>
           <button onClick={completedTodo}>Clear Completed</button>
        </div>
    )    
}
export default TodoForm