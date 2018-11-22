import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  render() {
    return (
      <div className = "clockSettings">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={this.handleIncrement}>
          +
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 12 ? "warning" : "primary";
    return classes;
  }

  handleIncrement() {
    if (this.state.count >= 12) this.setState({ count: 1 });
    else {
      this.setState({ count: this.state.count + 1 });
    }
  }

  formatCount() {
    const { count } = this.state;
    return count;
  }
}

export default Counter;
