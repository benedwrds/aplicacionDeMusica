import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import NavBar from './NavBar'
import Card from '@material-ui/core/Card'
import { CardContent, CardActions, Switch, MenuItem, Grid, Slider, Select, Typography } from '@material-ui/core';
import styles from '../style.module.css'

const offlineMsg = "Your application is offline. You won't be able to share or stream music to other devices."
const volumeExceeds = "Listening to music at a high volume could cause long-term hearing loss."
const lowQuality = "Music quality is degraded. Increase quality if your connection allows it."


export class Dashboard extends Component {
  constructor(){
  super();
  this.state = {
    online: true,
    volume: 20,
    quality: 2,
    notifications: []

  };
}

  
  //changes switch from online to offline, vice-versa
  onChangeOnline = () => {
    //if "online: true" !this.state.online sets it to "online: false" and vice-versa 
    let newOnlineState = !this.state.online
    //if it is not true referencing to comment above ^
    if(!newOnlineState){
      this.setState({
        notifications: [...this.state.notifications, offlineMsg]
      })
    }
    this.setState({
      online: newOnlineState
  })
}

componentDidUpdate = (event, prevState) => {
    //slider change, update state, when state changes do something
    if(this.state.volume >= 80 && prevState.volume < 80){
      this.setState({
        notifications: [...this.state.notifications, volumeExceeds]
      })
      
    }
} 

   volume80 = (event, newValue) => {
     this.setState({
       volume: newValue
     })
     };


    // soundQuality = (event, qualityValue) => {
    //   if(qualityValue === 1){
    //     //this.setState({volume: true})
    //     this.setState({notifications: [...this.state.notifications, lowQuality]
    //     })
    //   }
    //   this.setState({
    //     quality: qualityValue
    //    })
    //   };
 
  soundQuality = (event, value) => {
    if(event.target.value === 1)
    this.setState({
      notifications: [...this.state.notifications, lowQuality]
    })
    this.setState({
      quality: event.target.value
    })
  };
  

 render() { 
  return (
    <div>
  <NavBar/>
  <div className={styles["welcome"]}>
    Welcome User!
  </div>
  {/*card 1*/}
 
  <Grid container
    spacing = {2}
    direction="row"
    justify="space-evenly"
    alignItems="center"
    >
    <Card>
      <CardContent>
          Online Mode
      </CardContent>
      <CardActions>
        <div className={styles["cardContent"]}>
          Is the application connected to the internet? 
          <br/>
        </div>
    
         <Switch checked={this.state.online} onChange={this.onChangeOnline}/>
      </CardActions>
    </Card>
    
  
  {/*card 2*/}
  
    <Card>
      <CardContent>
       Master Volume
      </CardContent>
      <CardActions>
        Overrides all other sound settings in this application
        <br/>
        <Slider
        // checked={this.state.volume} onChange={this.volume80} 
        onChange={this.volume80}
        step={10}
        value={this.state.volume}
        valueLabelDisplay="on"
        />
      </CardActions>
    </Card>

{/*card 3*/}
    <Card>
      <CardContent>
        Sound Quality
      </CardContent>
      <CardActions>
        <div className={styles["cardContent"]}>
        Manually control the music 
        <br/> 
        quality in event of poor connection
        </div>
        <Select checked={this.state.quality} onChange={this.soundQuality}
        defaultValue={2}
        >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        </Select>
      </CardActions>
    </Card>
  </Grid>


{/*Notifications*/}

<h4 className={styles["notify"]}>System Notifications: </h4>
  {this.state.notifications.map((notification, index) => {
    return <div className={styles["systemPref"]}>
        {notification}
    </div>
      })}
    </div>
  );
}
}


export default Dashboard;
