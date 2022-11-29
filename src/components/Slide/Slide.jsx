import React, { Component } from "react";
import './Slide.css'
export default class Slide extends Component {
  render() {
    return (
      <>
      <div className="pic">
           <img className="picture" src="https://www.usenix.org/sites/default/files/usenix_video_background_3.jpg" alt='title'></img>
      <div className="days">
        <p className="text">15 DAYS</p>
        <p >-</p>
        <p className="text">15 TALK</p>
        <p >-</p>
        <p className="text">2 PARTIES</p>
      </div>
      <h1> World Digital Conference </h1>
        </div>
        <ul className="event-info">
          <li><p className="color">Califoria, USA</p></li>
          <li><p className="color">January 20 To 25, 2022</p></li> 
        </ul>
       <div className="button">
          <button>Book Ticket</button>
          <br></br>
          <button className="orangebutton">Video Demo</button>
       </div>
         </>
    )
  }
}
       