import React, { Component } from "react";
import "./Footer.css";
import home from './homeIcon2.png';
import alarm from './alarmIcon.png';
import calendar from './calendarIcon.png';
import tip from './tipIcon.png';


function Footer () {
    return (
        <div className = "footerContainer">
            <div className = "icon">
                <img className = "iconImg" src = {home} height = "45px" width = "45px"/>
                <h2 id="home">home</h2>
            </div>
            <div className = "icon">
                <img className = "iconImg" src = {alarm} height = "49px" width = "49px"/>
                <h2 id="home">alarm</h2>
            </div>
            <div className = "icon">
                <img className = "iconImg" id="calendar" src = {calendar} height = "38px" width = "38px"/>
                <h2 id="home">calender</h2>
            </div>
            <div className = "icon">
                <img className = "iconImg" src = {tip} height = "45px" width = "45px"/>
                <h2 id="home">tips</h2>
            </div>
        </div>
    )
}

export default Footer