import React from 'react';
import './Todo.css';



const todo =({task, strikeThrough, start, hash, text})=>{
    let className= 'todo-task';
    let checkStyle = {
        textDecoration: hash.completed === 'striked' ? 'line-through' : 'inherit',

    }
    if(hash.completed ==='started'){
        className +=" inProgress";
        text = 'In Progress';
    }
    else if(hash.completed === 'striked'){
        // eslint-disable-next-line no-unused-expressions
        hash.completed='closed'
        text ='Closed'
        console.log(hash.completed)
    }
    else if(hash.completed ===true){
        className +="  completed";
        text = 'Completed';
        document.querySelector(".todo-task").disabled =true;
    }
    else{
        text='Start'
    }
  


    return (
        <div className='todo' >
      
            <div className={className} style={checkStyle} onClick={()=> strikeThrough(hash.id)}>
                 <p>{task}</p>
            </div>
            <div className='todo-buttons'>
                <button className='todo-start' onClick={()=> start(hash)}>{text}</button>
            </div>
        </div>
    )

}

export default todo
