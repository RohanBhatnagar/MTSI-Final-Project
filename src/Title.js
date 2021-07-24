import React from 'react';
import './Title.css';
import logo from './sun.png';
import './fonts/PlayfairDisplay-Italic.ttf';


function Title() {
  return (
    <div className = "Title">
      <img src = {logo} height = "75px" width = "75px" />
      <h1>Theia</h1>
      <img src = {logo} height = "75px" width = "75px" />
    </div>
  )
}

export default Title