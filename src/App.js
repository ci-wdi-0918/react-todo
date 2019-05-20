import React, { Component } from 'react';
import './App.css';

import Task from './Components/Task';

class App extends Component {

  state = {
    list : [
      {
        id: 1,
        todo: 'Buy Milk'
      }, 
      {
        id: 2,
        todo: 'Pick up mail'
      },
      {
        id: 3,
        todo: 'Walk the dog'
      }
    ],
    taskInput: ''
  }

  showTaskFunc = () => {
    return this.state.list.map((task, index) => {
      return (
        <div key={index}>
          {task.todo}
        </div>
      )
    })
  } 

  handleInput = (event) => {
    console.log(`name: ${event.target.name} || value ${event.target.value}`)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {

    return (
      <div className="App">

          <div>
            <form>
              <input onChange={this.handleInput} name="taskInput" />
              <button>Submit</button>
            </form>
            
          </div>

          {this.showTaskFunc()}

      </div>
    )
  }


}

export default App;
