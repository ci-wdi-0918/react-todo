import React, { Component } from 'react';
import axios from 'axios';

import Nav from './Components/Nav';
import './App.css';



import Task from './Components/Task';

class App extends Component {

  state = {
    list : [],
    isAuth: false,
    password: '1',
    message: 'Please sign up to use the best Todo Manager System!',
    user: null
  }

  componentDidMount() {

    axios.get('http://localhost:3001/todo')
         .then( result => {
          
          this.setState({
            list: result.data
          })

         })
         .catch( error => {
          console.log(error)
         })

  }

  handleSubmit = (value) => {
    let newTask = {
      todo: value
    }

    axios.post('http://localhost:3001/todo/createtodo', newTask)
         .then( todo => {


            let currentTaskObj = Object.assign([], this.state.list);
            currentTaskObj.push(todo.data);

            this.setState({
              list: currentTaskObj
            })

         })
         .catch(error => {
           console.log(error);
         })


  }

  handleDelete = (taskID) => {

  
    axios.delete(`http://localhost:3001/todo/deletetodobyid?id=${taskID}`, { data: {
      id: taskID
    }})
      .then( result => {
        let updated = [...this.state.list];
        let updatedTask = updated.filter(task => task._id !== taskID);
        this.setState({
          list: updatedTask
        });
      })
      .catch( error => {
        console.log(error)
      })
  }

  handleEditInputUpdate = (id, newTodo) => {
    console.log('TRIGGERD', id, newTodo)

    axios.put('http://localhost:3001/todo/updatetodobyid',  {
        id: id,
        newTodo: newTodo
    })
    .then(newTodo => {
     
      let updated = [...this.state.list];
     
      updated.map(task => (task._id === id ? task.todo = newTodo.data.todo : task))
  
      this.setState({
        list: updated
      })

    })
    .catch(error => {
      console.log(error);
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

      // axios.get('http://localhost:3001')
      //    .then( result => {
      //     console.log(result);
          
      //     this.setState({
      //       list: result.data
      //     })

      //    })
      //    .catch( error => {
      //     console.log(error)
      //    })
      
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

