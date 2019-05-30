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
    }
    else if(hash.completed ==='striked'){
        hash.completed=true;
        className +=' strikeThrough';
        text = 'Closed';
    }
    else{
        text='Start'
    }
    console.log(hash)

    return (
        <div className='todo' onClick={()=>strikeThrough(hash)}>
      
            <div className={className} >
                 <p>{task}</p>
            </div>
            <div className='todo-buttons'>
                <button className='todo-start' onClick={()=> start(hash)}>{text}</button>
            </div>
        </div>
    )

}

export default todo
