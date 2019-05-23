import React, { Component } from 'react';
import uuidV4 from 'uuid/v4';
import axios from 'axios';

import Nav from './Components/Nav';
import './App.css';



import Task from './Components/Task';

class App extends Component {

  state = {
    list : [],
    isAuth: true,
    password: '123',
    message: 'Please sign up to use the best Todo Manager System!',
    user: null
  }

  componentDidMount() {

    // axios.get('http://localhost:3001')
    //      .then( result => {
    //       console.log(result);
          
    //       this.setState({
    //         list: result.data
    //       })

    //      })
    //      .catch( error => {
    //       console.log(error)
    //      })

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

  handleDelete = (taskID) => {
    let updated = [...this.state.list];
    let updatedTask = updated.filter(task => task.id !== taskID);
    this.setState({
      list: updatedTask
    });
  }

  handleEditInputUpdate = (id, newInput) => {
    console.log('TRIGGERD')
    let updated = [...this.state.list];

    updated.map(task => (task.id === id ? task.todo = newInput : task))

    this.setState({
      list: updated
    })

  }

  handleAuth = (userInfo) => {
    //console.log('APP 65', userInfo);

    const { name, password } = userInfo;

    if(password === this.state.password) {
      this.setState({
        isAuth: !this.state.isAuth,
        user: name
      })

      
      axios.get('http://localhost:3001')
         .then( result => {
          console.log(result);
          
          this.setState({
            list: result.data
          })

         })
         .catch( error => {
          console.log(error)
         })
      
    } else {
      this.setState({
        message: 'Password does not match! Please check your password'
      })
    }

  }

  logout = () => {
    //console.log('85 logout');
    this.setState({
      user: null,
      message: 'Please login to use the app',
      isAuth: false
    })
  }

  render() {

    
    return (
      <div className="App">
        <Nav 
          appAuthFunc={this.handleAuth}
          user={this.state.user}
          appLogout={this.logout}
        />
        {
          this.state.isAuth ? (
            <Task 
              {...this.state}
              appHandleSubmit={this.handleSubmit}
              appHandleDeleteByID={this.handleDelete}
              appHandleEditInputUpdate={this.handleEditInputUpdate}
            />
          ) : this.state.message
        }
      </div>
    )
  }


}

export default App;

