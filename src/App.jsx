import './App.css'
import React, { Component } from "react";
import Header from './components/Header/Header';
import Slide from './components/Slide/Slide';
import Thirdpart from './components/3rdpart/3rdpart'
export default class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Slide/>
      <Thirdpart/>
      </>
      
    )
  }
}

