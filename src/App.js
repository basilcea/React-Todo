import React from 'react';
import uuid from 'uuid';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'
const initialTodo =[{
  id:uuid(),
  task:'Your first todo task',
  completed:false
}
]

class App extends React.Component {
constructor(props){
  super(props)
  this.state ={
      todoArray:initialTodo,
      todoTask : '',
  }
}
  onChange = (e) =>{
    this.setState({
      todoTask: e.target.value
    })
  }
  onAdd =() =>{
      const newTodo = {
        id:uuid(),
        task:this.state.todoTask,
        completed:false,
      }
      const newTodoArray = this.state.todoArray.concat(newTodo);

    this.setState({
      todoArray: newTodoArray,
      todoTask: '',
    });
  }
  onComplete =(id)=>{
    const newTodoArray = this.state.todoArray.filter(todo => todo.id !== id);
    this.setState({
      todoArray: newTodoArray,
    })

  }
  // you will need a place to store your state in this component.

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoArray = {this.state.todoArray} />
        <TodoForm  task={this.state.todoTask} changeHandler={this.onChange} addTodo={this.onAdd}  completedTodo={this.onComplete}/>
      </div>
    );
  }
}

export default App;
