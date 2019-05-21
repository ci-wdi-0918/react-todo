import React, { Component } from 'react'

class TaskList extends Component {

  state = {
      isToggle: false
  }  

  taskListHandleDeleteByID = (id) => {
      this.props.taskHandleDeleteByIDProps(id)
  }

  taskListHandleEdit = () => {

  }

  render() {

    const { todo, id } = this.props.task;
    const { isToggle } = this.state; 
    return (
        <div style={{marginBottom: '10px'}}>
            {  isToggle ? <input 
                            value={todo} 
                            onChange={this.taskListHandleEdit} 
                            name="newInput"
                            /> 
                            : todo } 
            <button style={{marginLeft: '5px', marginRight: '5px'}}>Edit</button>
            <button onClick={() => this.taskListHandleDeleteByID(id)}>Delete</button>
        </div>
    )
  }
}

export default TaskList;