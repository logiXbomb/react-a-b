import React, { Component } from 'react';

class RollingPicker extends Component {
  componentDidMount() {
    setTimeout(() => {
      $(this.refs.sel).material_select();
    }, 10);
  }
  render() {
    console.log(this);
    return (
      <div className="container">
        <div className="col-md-6">
          <select ref="sel">
            <option>Month</option>
            <option>Week</option>
            <option>Day</option>
            <option>Hour</option>
          </select>
        </div>
        <div className="col=md-6">
          Options B go here
        </div>
      </div>
    );
  }
}

export default RollingPicker;
