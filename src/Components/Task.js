import React, { Component } from 'react';

class Task extends Component {

    state = {
        taskInput: ''
    }


    showTaskList = () => {
        return this.props.list.map((task) => {
            return (
              <div key={task.id} style={{marginBottom: '10px'}}>
                {task.todo} <button onClick={this.taskHandleDeleteByID.bind(this, task.id)}>Delete</button>
              </div>
            )
          })
    }

    taskHandleDeleteByID = (taskID, event) => {
        this.props.appHandleDeleteByID(taskID);
    }

    taskHandleInput = (event) => {
        //console.log(`name: ${event.target.name} || value ${event.target.value}`)
        //<button onClick={() => this.taskHandleDeleteByID(task.id)}>Delete</button>
        this.setState({
          [event.target.name]: event.target.value
        })
    }

    taskHandleSubmit = (event) => {
        event.preventDefault();

        this.props.appHandleSubmit(this.state.taskInput);
        this.form.reset();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.taskHandleSubmit} ref={element => this.form = element} style={{marginBottom: '5px'}}>
                    <input 
                        onChange={this.taskHandleInput} 
                        name="taskInput" 
                    />
                    <button>Submit</button>
                </form>
               
                {this.showTaskList()} 
            </div>
        )
    }

}

export default Task;
