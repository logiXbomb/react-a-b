import React, { Component } from 'react';

class MainNav extends Component {
  componentDidMount() {
    $('.button-collapse').sideNav();
    $('.collapsible').collapsible();
  }
  render() {
    const props = this.props;
    return (
      <div>
        <a data-activates="slide-out" className="navbar-brand button-collapse"><i className="material-icons">menu</i></a>
        <ul id="slide-out" className="side-nav admin-side-nav dark-side-nav">
           <div className="logo-wrapper">
               <img src="http://beta.atlasviewer.com/img/logo/new50px.png" className="img-responsive img-circle" />
               <div className="rgba-stylish-strong">
                   <p className="user white-text">React
                       <br /> User Testing
                   </p>
               </div>
           </div>
           <ul className="collapsible collapsible-accordion">
               <li><a href="/" className="waves-effect waves-light"><i className="fa fa-home"></i> Home</a></li>
               <li><a href="picker" className="waves-effect waves-light"><i className="fa fa-calendar"></i> Rolling Picker</a></li>
           </ul>
       </ul>
      <nav className="double-navbar navbar navbar-fixed-top unique-color z-depth-1" role="navigation">
            <div className="container-fluid">
                <div className="navbar-header pull-left">
                    <a data-activates="slide-out" className="button-collapse"><i className="fa fa-bars"></i></a>
                </div>
                <ul className="list-inline text-center">
                    <li onClick={props.handleChange.bind(this, 'a')}>
                      <a
                        href="#"
                        className="waves-effect waves-light"
                        data-toggle="modal"
                        data-target="#contact-form"
                      >
                        <i className="fa fa-cogs"></i><br /><span>A</span>
                      </a>
                    </li>
                    <li onClick={props.handleChange.bind(this, 'b')}>
                      <a
                        href="#"
                        className="waves-effect waves-light"
                        data-toggle="modal"
                        data-target="#contact-form"
                      >
                        <i className="fa fa-sign-out"></i><br /><span>B</span>
                      </a>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    );
  }
}

export default MainNav;
