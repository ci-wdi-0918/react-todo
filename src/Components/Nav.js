import React, { Component } from 'react'

export default class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">

      
            </ul>

            <form className="form-inline my-2 my-lg-0">
                <input 
                    className="form-control mr-sm-2" 
                    type="text" name="name" 
                    placeholder="Name" 
                    aria-label="Name" 
                    />
                <input 
                    className="form-control mr-sm-2" 
                    type="text" name="password" 
                    placeholder="Password" 
                    aria-label="Password" 
                    />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">sign up</button>
            </form>

        </div>
        </nav>

    )
  }
}
