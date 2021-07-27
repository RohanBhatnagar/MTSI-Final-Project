import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase';
import './SetAlarm.css'
import Table from 'react-bootstrap/Table';

var hoursArr = [];
var minutesArr = [];
var AMarr = []

var alarms = [];

const urgency = [
    {
        value: 0,
        label: "IMPORTANT"
    },
    {
        value: 2,
        label: "CASUAL"
    },
    {
        value: 3,
        label: "PREFERRED"
    }
]

var currentAlarms = [];

let database = firebase.database();
var ref = database.ref('alarms');
ref.on('value', gotData, errData);

function gotData(data){
    console.log(data.val());
    var alarms = data.val();
    var keys = Object.keys(alarms);
    for(var i = 0; i < keys.length; i++){
        let k = keys[i];
        let hour = alarms[k].hour;
        let minute = alarms[k].minute;
        let AM = alarms[k].AM;
        currentAlarms.push(hour + ":" + minute + " " + AM);
    }
}

function errData(err){
    console.log(err);
}

function displayAlarms(){
    for(let i = 0; i < currentAlarms.length; i++){
        console.log(currentAlarms[i]);

        return(
            <h1>{currentAlarms[i]}</h1>
        )
    }
}



export class SetAlarm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hour: "00",
            minute: "00",
            AM: "AM"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    //send to firebase
    createAlarm = () => {
        const alarmRef = firebase.database().ref("alarms");
        const hour = this.state.hour;
        const minute = this.state.minute;
        const AM = this.state.AM;
        const element = {
            hour,
            minute,
            AM
        };
        alarmRef.push(element);
        alarms.push(
            <h>{this.state.hour} : {this.state.minute} : {this.state.AM}</h>
        )
    }



    handleChange = (e) => {
        if (e.target.title == "hour") {
            this.setState(
                {
                    hour: e.target.value
                }
            )
            console.log(this.state.hour)
        }
        else if (e.target.title == "minute") {
            let x = "0";
            if (e.target.value < 10) {
                x = x.concat(e.target.value);
            }
            else {
                x = e.target.value;
            }
            this.setState(
                {
                    minute: x
                }
            )
            console.log(this.state.minute)
        }
        else {
            this.setState(
                {
                    AM: "PM"
                }
            )
        }

    }


    render() {
        { hours() }
        { minutes() }
        { AM() }
        return (
            <div className="bigContainer">
                <div className="container1">
                    <h1 id="title">Set Alarm</h1>
                    <div className="selections">
                        <div className="select-container">
                            <select className="box" value={this.state.hour} title="hour" onChange={this.handleChange}>
                                {hoursArr.map((e) => (
                                    <option value={e.value}>{e.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="select-container">
                            <select className="box" value={this.state.minute} title="minute" onChange={this.handleChange}>
                                {minutesArr.map((e) => (
                                    <option value={e.value}>{e.label}</option>
                                ))}
                            </select>
                        </div>
                        <div className="select-container">
                            <select className="box" id="am" value={this.state.AM} title="AM" onChange={this.handleChange}>
                                {AMarr.map((e) => (
                                    <option value={e.value}>{e.label}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <select className="urgencyBox">
                        {urgency.map((e) => (
                            <option value={e.value}>{e.label}</option>
                        ))}
                    </select>
                    <h1 id="time">{this.state.hour}  : {this.state.minute} {this.state.AM}</h1>
                    <Button id="setAlarmButton" onClick={this.createAlarm}>Set Alarm</Button>
                </div>
                {displayAlarms()}
                
            </div>
        );
    }
}

function hours() {
    if (hoursArr.length < 12) {
        for (let i = 1; i <= 12; i++) {
            hoursArr.push(
                {
                    value: i,
                    label: i
                }
            )
        }
    }

}
function minutes() {
    let x = "0";
    if (minutesArr.length < 60) {
        for (let i = 1; i <= 60; i++) {
            if (i < 10) {
                x = x.concat(i.toString());
            }
            else {
                x = i;
            }
            minutesArr.push(
                {
                    value: i,
                    label: x
                }
            )
            x = "0";
        }
    }

}
function AM() {
    if (AMarr.length < 1) {
        AMarr.push(
            {
                value: true,
                label: "AM"
            },
            {
                value: false,
                label: "PM"
            }
        )
    }
}
export default SetAlarm;
