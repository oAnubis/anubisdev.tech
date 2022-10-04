import React, {useState, useEffect} from 'react';
import "./Menu.css"

class SlideOutMenuContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {useState: false};
  }

    render(){
      const {useState} = this.state;
      return (
        <div>
              <div id='slide_nav'>     
                  <p id="slide_nav_button" onClick={() =>this.setState({useState: !useState})}>☰</p>
              </div>
              <div>
                  <ul id='slide_menu' style={{ display: (useState ? 'block' : 'none') }}>
                      <li><a href="/">Landing</a></li>
                      <li><a href="/projects/">Portfolio</a></li>
                      <li><a href="/blogs">Blog</a></li>
                      <li><a href="/resume">Resume(CV)</a></li>
                      <li><a href="/about">About</a></li>
                      <li><a href="/404">404 Test</a></li>
                  </ul>
            </div>
        </div>
    )}
  }
export default SlideOutMenuContainer;