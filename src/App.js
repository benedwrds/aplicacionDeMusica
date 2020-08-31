import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import './App.css';
import styles from './style.module.css'



export class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    }

  }

  handleClick = () => {
    this.setState({
      loggedIn: true
    })
  }

  render() {
    if (this.state.loggedIn) {
      return <Dashboard/>
    } else {
    return (
    <div>
        <NavBar/>
      <div className={styles["login"]}>
        <TextField> </TextField>
        <br/>
        <TextField> </TextField>
        <br/>
        <Button onClick={this.handleClick}>Login</Button>
      </div>
    </div>
      

      )
    }
  }
}

export default App

