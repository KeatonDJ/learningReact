import React, { Component } from "react";

class Welcome extends Component {



  state = {
    name : "",
    password : "",
    time : ""
  }

  constructor() {
  super();
  this.upDate = this.upDate.bind(this);
  }

  render() {
    return(
    <div>
      <h1>Welcome, {this.props.name}</h1>
      <p>password: {this.props.password}</p>
      <h1>{this.upDate()}</h1>
    </div>
    )
  }

  upDate(){
    var date = new Date();

    var retDate = date.getUTCHours() + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();

    return retDate;
  }

}



export default Welcome
