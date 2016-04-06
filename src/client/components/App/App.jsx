/* global $ */
import React, { Component, PropTypes, cloneElement } from 'react';
import { MainNav } from './../';

class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  };
  state = {
    ab: 'a',
  };
  _updateAB = (ab) => {
    this.setState({ ab });
  }
  render() {
    const { children } = this.props;
    const { ab } = this.state;
    return (
      <div className="container">
        <MainNav handleChange={this._updateAB} />
        <div style={{ marginTop: '150px'}}>
          {cloneElement(children, { ab })}
        </div>
      </div>
    );
  }
}

export default App;
