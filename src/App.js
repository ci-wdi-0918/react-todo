import React, { Component } from 'react';
import uuidV4 from 'uuid/v4';

import './App.css';

import Task from './Components/Task';

class App extends Component {

  state = {
    list : [
      {
        id: uuidV4(),
        todo: 'Buy Milk'
      }, 
      {
        id: uuidV4(),
        todo: 'Pick up mail'
      },
      {
        id: uuidV4(),
        todo: 'Walk the dog'
      }
    ],
    taskInput: ''
  }

  showTaskFunc = () => {
    return this.state.list.map((task) => {
      return (
        <div key={task.id}>
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

  handleSubmit = (event) => {
    event.preventDefault();

    let newTask = {
      todo: this.state.taskInput,
      id: uuidV4()
    }

    let currentTaskObj = Object.assign([], this.state.list);

    currentTaskObj.push(newTask);

    // this.setState({
    //   list: currentTaskObj,
    //   taskInput: ''
    // })

    this.setState({
      list: currentTaskObj
    })

    this.form.reset();

  }

  render() {

    return (
      <div className="App">

          <div>
            <form onSubmit={this.handleSubmit} ref={(element) => this.form = element } >

              {/* <input 
                onChange={this.handleInput} 
                name="taskInput" 
                value={this.state.taskInput} 
                /> */}

              <input 
                onChange={this.handleInput} 
                name="taskInput" 
                />
              <button>Submit</button>

            </form>
            
          </div>

          {this.showTaskFunc()}

      </div>
    )
  }


}

export default App;
