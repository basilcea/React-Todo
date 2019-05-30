import React from "react";
import uuid from "uuid";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Search from './components/TodoComponents/search'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Start",
      todoArray: [],
      todoTask: ""
    };
  }
  componentDidMount() {
    const data = localStorage.getItem('tasks');
    const tasks = JSON.parse(data);
    this.setState({
      ...this.state,
      todoArray: tasks || []
    });
  }
  onChange = e => {
    this.setState({
      todoTask: e.target.value
    });
  };
  onAdd = e => {
    e.preventDefault();
    if (this.state.todoTask !== "") {
      const newTodo = {
        id: uuid(),
        task: this.state.todoTask,
        completed: false
      };
      const newTodoArray = this.state.todoArray.concat(newTodo);
      console.log(JSON.stringify(newTodoArray))
      localStorage.setItem('tasks', JSON.stringify(newTodoArray))
      this.setState({
        todoArray: newTodoArray,
        todoTask: ""
      });
    }
    console.log(this.state.todoArray)
  };
  onSelectStart = e => {
    const selectedTodo = this.state.todoArray.find(todo => todo.id === e.id);
    if (selectedTodo.completed === false) {
      selectedTodo.completed = "started";
    } else {
      selectedTodo.completed = true;
      let index = this.state.todoArray.indexOf(selectedTodo);
      this.state.todoArray.splice(index, 1);
      this.state.todoArray.push(selectedTodo);
    }
    this.setState({
      todoArray: this.state.todoArray
    });
  };

  onRemove = () => {
    const newTodoArray = this.state.todoArray.filter(
      todo => todo.completed !== true
    );
    this.setState({
      todoArray: newTodoArray
    });
  };
//   onStrikeThrough = e => {
//     // else if (selectedTodo.completed ==='closed'){
//     //   selectedTodo.completed = true

//     // }
//     //  else{
//     //    selectedTodo.completed = false
//     // }
// // striked => unstrike (completed=striked => complete=!)
// // true => dont to anything
// // false =>strike
// // started =>strike
// // false => started => true

// // started to true

//     console.log(e)
//     this.setState({
//       todoArray: this.state.todoArray.map(todo => {
//         if (todo.id === e.id) {
//           if (todo.completed === false || todo.completed === "started") {
//             todo.completed = "striked";
//           }
//         }
//         return todo;
//       })
//     });
//   };
  onSubmit = event =>{
    const data = localStorage.getItem('tasks');
    const tasks = JSON.parse(data);
    
  const results = tasks.filter(
    todo =>  todo.task.toLowerCase().includes(event.target.value.toLowerCase())
    )
    if(event.target.value ===''){
      this.setState({
        todoArray:tasks
      })
    }
    else{
      this.setState({
        todoArray: results
      })
    }
    }


  // you will need a place to store your state in this component.

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Search  submit={this.onSubmit}/>
        <TodoList
          todoArray={this.state.todoArray}
          started={this.onSelectStart}
          strikeThrough={this.onStrikeThrough}
          textValue={this.state.text}
        />
        <TodoForm
          task={this.state.todoTask}
          changeHandler={this.onChange}
          addTodo={this.onAdd}
          completedTodo={this.onRemove}
        />
      </div>
    );
  }
}

export default App;
