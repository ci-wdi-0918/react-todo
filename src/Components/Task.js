import React, { Component } from 'react';

class Task extends Component {

    
    showTaskList = () => {
        return this.props.list.map((task) => {
            return (
              <div key={task.id}>
                {task.todo}
              </div>
            )
          })
        
    }


    render() {
        return (
            <div>
                <input 
                    onChange={this.handleInput} 
                    name="taskInput" 
                />
                {this.showTaskList()} 
            </div>
        )
    }

}

export default Task;