import React, { Component } from 'react'

export default class Nav extends Component {

  state = {
      name: '',
      password: ''
  }
  
  navAuth = (event) => {
    //console.log(`name: ${event.target.name} | value ${event.target.value}`);

    this.setState({
        [event.target.name]: event.target.value
    })
  }


  handleAuthSubmit = (event) => {
      event.preventDefault();

      this.props.appAuthFunc(this.state);

      this.setState({
          name: '',
          password: ''
      })
  

  }

  logout = () => {
      //console.log('logged out is clicked');
      this.props.appLogout();
  }

  render() {

    let authForm = (
        <form className="form-inline my-2 my-lg-0" onSubmit={this.handleAuthSubmit}>
            <input 
                className="form-control mr-sm-2" 
                type="text" 
                name="name" 
                placeholder="Name" 
                aria-label="Name" 
                onChange={this.navAuth}
                value={this.state.name}
                />
            <input 
                className="form-control mr-sm-2" 
                type="text" 
                name="password" 
                placeholder="Password" 
                aria-label="Password" 
                onChange={this.navAuth}
                value={this.state.password}
                />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">sign up|sign in</button>
        </form>
    )

    let loggedUser = (
        <React.Fragment>
            <span>{this.props.user}</span>
            <button onClick={this.logout}>Log out</button>
        </React.Fragment>
    )

    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

      
            </ul>

           {
               this.props.user ? loggedUser : authForm
           }

        </div>
        </nav>

    )
  }
}
