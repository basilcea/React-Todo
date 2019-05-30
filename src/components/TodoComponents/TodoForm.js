import React from 'react';

const TodoForm = ({task ,changeHandler , addTodo , completedTodo}) =>{
    return(
        <div>
        <form onSubmit={e => addTodo(e)}>
        <input
           value={task}
           onChange={changeHandler}
           type ='text'
           /> 
           <button >Add todo</button>
           <button onClick={completedTodo}>Clear Completed</button>
        </form>
           
        </div>
    )    
}
export default TodoForm