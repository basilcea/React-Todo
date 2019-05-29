// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

const Todolist = ({todoArray}) =>{
    return (
        <div>
            {todoArray.map(todo => <Todo key={todo.id} task={todo.task}/>)
        }
        </div>
    )
}
export default Todolist ;