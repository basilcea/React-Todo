// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

const Todolist = ({todoArray, select}) =>{
    return (
        <div>
            {todoArray.map(todo => <Todo key={todo.id} task={todo.task} strikeThrough={select} id={todo.id}/>)
        }
        </div>
    )
}
export default Todolist ;