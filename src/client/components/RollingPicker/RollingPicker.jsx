import React, { Component } from 'react';
import A from './A.jsx';
import B from './B.jsx';

class RollingPicker extends Component {
  render() {
    const props = this.props;
    return (
      <div className="panel panel-default row">
        <div className="panel-heading">Rolling Picker</div>
        <div className="panel-body col-md-6 col-md-offset-2">
          {props.ab === 'a' ? <A /> : <B />}
        </div>
      </div>
    );
  }
}

export default RollingPicker;
