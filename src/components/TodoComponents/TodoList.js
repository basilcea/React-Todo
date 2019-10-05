// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

const Todolist = ({todoArray, started , strikeThrough, textValue}) =>{
    return (
        <div>
            {todoArray.map(todo => <Todo key={todo.id} task={todo.task} 
                start ={started} strikeThrough={strikeThrough} hash={todo} text={textValue}/>)
        }
        </div>
    )
}
export default Todolist ;