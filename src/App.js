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
    ]
  }

  handleSubmit = (value) => {
    
    let newTask = {
      todo: value,
      id: uuidV4()
    }

    let currentTaskObj = Object.assign([], this.state.list);

    currentTaskObj.push(newTask);

    this.setState({
      list: currentTaskObj
    })

  }

  render() {

    return (
      <div className="App">
        <Task 
          {...this.state}
          appHandleSubmit={this.handleSubmit}
        />
      </div>
    )
  }


}

export default App;

