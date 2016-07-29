import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';

export default class Accounts extends Component {
  componentDidMount() {
    //Render the blaze accounts from
    //find the div we rendered in render method
    //place accounts form in div
    this.view = Blaze.render(Template.loginButtons,
                ReactDOM.findDOMNode(this.refs.container));

  }

  comonentWillUnmount() {
    //find forms we created and destroy them
    Blaze.remove(this.view);

  }
  render() {
    return (
      <div ref='container'></div>
    );
  }
}
