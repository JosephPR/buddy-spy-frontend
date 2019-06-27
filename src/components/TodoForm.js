import React, { Component } from 'react'
import '../App.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Input from '@material-ui/core/Input';

export default class TodoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      content: '',
    }
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    handleSubmit = (event) => {
      const newTodo = this.state
      event.preventDefault()
      this.props.postTodos(newTodo)
      this.setState({
  title: '',
  content: '',
})
    }



  render(){
    return(
      <Router>
        <React.Fragment>
          <h1> Enter Todo</h1>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <label htmlFor='title'>Title: </label>
                <Input name="title" id="title" onChange={(event) => this.handleChange(event)} value={this.state.title} />
              <label htmlFor='content'>Content: </label>
                <Input name="content" id="content" onChange={(event) => this.handleChange(event)} value={this.state.content} />
              <button>Submit</button>
            </form>
        </React.Fragment>
      </Router>
    )
  }
}
