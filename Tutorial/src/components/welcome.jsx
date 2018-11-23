import React, { Component } from "react";

class Welcome extends Component {

  state = {
    time : "",
    timeZone : 6,
    alarmTime : "05:52:00"
  }

  constructor() {
  super();
  this.upDate = this.upDate.bind(this);
  this.upDateAlarmHour = this.upDateAlarmHour.bind(this);
  this.upDateAlarmMin = this.upDateAlarmMin.bind(this);
  this.handleNegIncrement = this.handleNegIncrement.bind(this);
  this.handlePosIncrement = this.handlePosIncrement.bind(this);
  }

  render() {
    return(
    <div>
        <div className="card">
            <div className="card-body">
              <h1 className="card-title">Current Time</h1>
              <h2 className = "card-text">{this.upDate()}</h2>
              <button onClick = {this.handlePosIncrement} className="btn btn-primary">+Hr</button>
              <button onClick = {this.handleNegIncrement} className="btn btn-primary">-Hr</button>

            </div>
          </div>

          <h2>AlarmTime = {this.state.alarmTime}</h2>
          <button onClick = {this.upDateAlarmHour}>Hr+</button>
          <button onClick = {this.upDateAlarmMin}>Min+</button>
        </div>
    )
  }

  upDate(){
    var date = new Date();
    var hrs = date.getUTCHours();

    if(this.state.timeZone >= 0 && this.state.timeZone <= 12){
      hrs -= this.state.timeZone;
    }

    hrs -= hrs > 12 ? 12 : 0;

    if (hrs < 0){
      hrs = hrs * -1;
    }

    hrs = hrs < 10 ? "0" + hrs : hrs;

    var min = date.getUTCMinutes();

    min = min < 10 ? "0" + min : min;

    var sec = date.getUTCSeconds();

    sec = sec < 10 ? "0" + sec : sec;

    let retDate = hrs + ":" + min + ":" + sec;

    console.log(this.state.alarmTime);
    if(this.state.alarmTime === retDate){
      alert("Alarm!!!");
    }


    return retDate;
  }

upDateAlarmHour(){
  var hr = this.state.alarmTime.slice(0,2);
  hr++;
  if(hr > 12){
    hr = 0;
  }
  hr = hr < 10 ? "0" + hr : hr;
  //console.log(hr);
  var min = this.state.alarmTime.slice(3,5);
  //console.log(min);
  var sec = this.state.alarmTime.slice(6, 8);
  //console.log(sec);

  let retDate = hr + ":" + min + ":" + sec;

  this.setState({alarmTime : retDate});
}

upDateAlarmMin(){
  var hr = this.state.alarmTime.slice(0,2);
  //console.log(hr);
  var min = this.state.alarmTime.slice(3,5);
  min++;
  if(min > 60){
    min = 0;
  }
  min = min < 10 ? "0" + min : min;
  //console.log(min);
  var sec = this.state.alarmTime.slice(6, 8);
  //console.log(sec);

  let retDate = hr + ":" + min + ":" + sec;

  this.setState({alarmTime : retDate});
}

  handlePosIncrement() {
    this.setState({ timeZone: this.state.timeZone - 1 });
  }

  handleNegIncrement(){
    this.setState({ timeZone: this.state.timeZone + 1 });
  }

}



export default Welcome
