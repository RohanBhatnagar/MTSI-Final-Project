import React from 'react';
import './Title.css';
import logo from './sun.png';
import './fonts/PlayfairDisplay-Italic.ttf';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import firebase from "./util/firebase.js";

const createElement = () => {
  const elementRef = firebase.database().ref("elements");
  const name = "Rohan";
  const element = {
    name,
    complete: false
  };
  elementRef.push(element);
}

function Title() {
  return (
    <div className = "Title">
      <img src = {logo} height = "75px" width = "75px" />
      <h1>Theia</h1>
      <img src = {logo} height = "75px" width = "75px" />
      <Container>
        <Button onClick={createElement}> Test </Button>
      </Container>
    </div>
  )
}

export default Title