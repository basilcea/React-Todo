import React from 'react';
import uuid from 'uuid';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm'

class App extends React.Component {
constructor(props){
  super(props)
  this.state ={
      text:'Start',
      todoArray:[],
      todoTask : '',
  }
}
  onChange = (e) =>{
    this.setState({
      todoTask: e.target.value
    })
  }
  onAdd =() =>{
    if(this.state.todoTask!==''){
      const newTodo = {
        id:uuid(),
        task:this.state.todoTask,
        completed:false,
      }
      const newTodoArray = this.state.todoArray.concat(newTodo);
    this.setState({
      todoArray: newTodoArray,
      todoTask: ''
    });

  }
}
  onSelectStart =(e) =>{
    const selectedTodo = this.state.todoArray.find(todo => todo.id === e.id);
    if(selectedTodo.completed === false){
      selectedTodo.completed = 'started'
    }
    else{
      selectedTodo.completed = true
      let index = this.state.todoArray.indexOf(selectedTodo)
      this.state.todoArray.splice(index ,1)
      this.state.todoArray.push(selectedTodo)
    } 
    this.setState({
      todoArray: this.state.todoArray
    })
  }
 
  onRemove =()=>{
    const newTodoArray = this.state.todoArray.filter(todo =>todo.completed !== true);
    this.setState({
      todoArray: newTodoArray,
    })
  }
  onStrikeThrough=(e)=>{
    const selectedTodo = this.state.todoArray.find(todo => todo.id === e.id);
    if(selectedTodo.completed === false){
      selectedTodo.completed = 'striked'
    }
    this.setState({
      todoArray: this.state.todoArray,
    })

  }
  
  // you will need a place to store your state in this component.

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoArray = {this.state.todoArray} started={this.onSelectStart} strikeThrough={this.onStrikeThrough} textValue={this.state.text}/>
        <TodoForm  task={this.state.todoTask} changeHandler={this.onChange} addTodo={this.onAdd}  completedTodo={this.onRemove}/>
      </div>
    );
  }
}

export default App;
