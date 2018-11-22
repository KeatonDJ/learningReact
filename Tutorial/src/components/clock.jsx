import React, { Component } from "react";

class Clock extends Component {
  state = {
    hours : 1,
    minutes : 0,
    seconds : 0
  }


  constructor() {
    super();
    this.getTime = this.getTime.bind(this);
  }


  render() {
    return(
      <div className = "clock">
        this.state = {this.getTime()}

      </div>
    )
  }


  getTime(){
    var time = new Date();
    this.setState ({});
  }
}

export default Clock
