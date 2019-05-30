import React from 'react';
import './Todo.css';



const todo =({task, strikeThrough, start, hash, text})=>{
    let className= 'todo-task';
    if(hash.completed ==='started'){
        className +=" inProgress";
        text = 'In Progress';
    }
    else if(hash.completed ===true){
        className +="  completed";
        text = 'Completed';
        document.querySelector(".todo-task").disabled =true;
    }
    else if(hash.completed ==='striked'  ){
        document.querySelector(`.todo-task-${hash.id}`).classList.toggle('strikeThrough');
        text = 'Closed';
    }
    else{
        text='Start'
    }


    return (
        <div className='todo'>
      
            <div className={`${className} ${className}-${hash.id}`} >
                 <p>{task}</p>
            </div>
            <div className='todo-buttons'>
                <button className='todo-start' onClick={()=> start(hash)}>{text}</button>
            </div>
        </div>
    )

}

export default todo
