import React, { Component } from "react";
import './Header.css'
export default class Header extends Component {
  render() {
    return (
      <>
        <div className="first">
          <img src="https://themecraze.net/html/volia/images/logo.png" alt='title'></img>
          <ul>
            <li className="nav">Home</li> <i class="fa-solid fa-chevron-down"></i>
            <li className="nav">About</li> <i class="fa-solid fa-chevron-down"></i>
            <li className="nav">Pages</li> <i class="fa-solid fa-chevron-down"></i>
            <li className="nav">Shop</li> <i class="fa-solid fa-chevron-down"></i>
            <li className="nav">Blog</li> <i class="fa-solid fa-chevron-down"></i>
            <li className="nav">Contact us</li>
            </ul>
            <div className="search">
              <span><i class="fa-solid fa-magnifying-glass"></i></span>
            </div>
            <button>Book Ticket</button>
        </div> 
      
        
      </>
    )
  }
}