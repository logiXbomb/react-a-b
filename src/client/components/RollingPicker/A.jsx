import React, { Component } from 'react';
import './a.scss';

class RollingPicker extends Component {
  state = {
    time: 'Month to date',
    range: 0,
    timetext: 'Month',
    isChecked: true,
  };
  _handleChange = (e) => {
    const time = e.target.value;
    let timetext = '';
    switch (time) {
      case 'Month to date':
        timetext = 'Months';
        break;
      case 'Week to date':
        timetext = 'Weeks';
        break;
      case 'Today':
        timetext = 'Days';
        break;
      case 'Now':
        timetext = 'Hours';
        break;
    }
    this.setState({ time, timetext });
  }
  _changeRange = (e) => {
    const range = e.target.value;
    this.setState({ range });
  }
  _toggleChecked = () => {
    this.setState({ isChecked: !this.state.isChecked });
  }
  render() {
    const { time, range, timetext, isChecked } = this.state;
    return (
      <div className="container">
        <div className="col-md-4">
          <select className="browser-default" onChange={this._handleChange} ref="sel">
            <option value="Month to date">Month</option>
            <option value="Week to date">Week</option>
            <option value="Today">Day</option>
            <option value="Now">Hour</option>
          </select>
        </div>
        <div className="col-md-2">
          <p>
            <input onChange={this._toggleChecked} type="checkbox" className="filled-in" readOnly id="filled-in-box" checked={isChecked} />
            <label htmlFor="filled-in-box">{`${time}`}</label>
          </p>
        </div>
        <div className="col-md-6">
          <div className="col-md-3">{`Plus ${range} ${timetext}`}</div>
          <div className="col-md-2">
            <input value={range} onChange={this._changeRange} type="number" />
          </div>
        </div>
      </div>
    );
  }
}

export default RollingPicker;
