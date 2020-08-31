import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';

export class NavBar extends Component {
  render() {
    return (
      <div>
     <AppBar position="static" style={{padding: 12}} >Music App</AppBar>    
      </div>
    )
  }
}

export default NavBar
