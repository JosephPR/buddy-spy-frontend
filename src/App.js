import React, { Component } from 'react';
import TodoForm from './components/TodoForm.js'
import TodoContainer from './components/TodoContainer.js'
import Clock from './components/Clock/Clock'
import Navbar from './components/Navbar'
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: undefined
    }
  }
  componentDidMount(){
    this.fetchTodos()
  }


  fetchTodos = () => {
    let url = "http://localhost:3000/todos"
    fetch(url)
      .then(response => response.json())
      .then(result => this.setState({todos: result}))
  }


  postTodos = (newTodo) => {
    let url = "http://localhost:3000/todos"
    let newTodos =  [...this.state.todos, newTodo]
    fetch(url, {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(response => console.log('Success:', JSON.stringify(response)))
    .catch(error => console.error('Error:', error))
    .then(result => this.setState({
      todos: newTodos
    }))
  }

render (){
  return (
    <div className="App">
      <Navbar />
      <Clock />
      <h1>GitMoney Todo App</h1>
      <TodoForm postTodos={this.postTodos}/>
      {this.state.todos
        ? <TodoContainer todos={this.state.todos} />
      : <img src="https://media1.giphy.com/media/71CE9qn5HM8Du/giphy.webp?cid=790b76115d13ebb271364841595b1337&rid=giphy.webp" alt="megaman" />
      }
    </div>
  )
}
}
