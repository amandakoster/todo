import React from 'react';

const Title = () => {
  return( <div><h1>TODO LIST</h1></div> )
}

const ToDoItem = ({todo, remove}) => {
  return (<li 
            style={{ listStyleType: "none" }}   
            onClick={() => {remove(todo.id)}}>
            {todo.text}
          </li>
  )
}

const ToDoItemList = ({todos, remove}) => {
  let list = todos.map((todo) => {
    return (<ToDoItem 
              todo={todo} 
              key={todo.id} 
              remove={remove}/>)    
  })
  return (<ul>{list}</ul>)
}

const ToDoItemForm = ({todoAdd}) => {
  let input  
  return (
    <div>
      <input placeholder=" add a todo here " ref={node => {input=node}} />
      <button onClick={() => {
          todoAdd(input.value)
          input.value = ""
        }}>+</button>
    </div>)
}

window.id = 0;

class ToDoApp extends React.Component{
  constructor(props){
    super(props); 
    this.state = { data: [], done: false}
  }

  todoAdd(item){
    const todo = {text: item, id: window.id++}
    this.state.data.push(todo)
    this.setState({ data: this.state.data })
  }

  handleRemove(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    })
    this.setState({ data: remainder });
  }

  render() {
    return(
      <div>
      <Title />
      <ToDoItemForm todoAdd={this.todoAdd.bind(this)} />
      <p>You have {this.state.data.length} todo&#39;s. Click each one to delete it.</p>
      <ToDoItemList
        todos={this.state.data}
        remove={this.handleRemove.bind(this)} />
      </div>
    )
  }
}

export default ToDoApp;

