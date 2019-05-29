import React from 'react';

const todo =(props)=>{
    return (
        <div key={props.id}>
            <p>{props.task}</p>
        </div>
    )

}

export default todo
