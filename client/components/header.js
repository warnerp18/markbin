import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

import Accounts from './accounts';

export default class Header extends Component {

  onBinClick(e) {
    e.preventDefault();

    Meteor.call('bins.insert', (error, binId) => {
      browserHistory.push(`/bins/${binId}`);
    });
  }

  render() {
    return (
      <nav className='nav navbar-default'>
        <div className='navbar-header'>
          <Link to='/' className='navbar-brand'>Markbin</Link>
        </div>
        <ul className='nav navbar-nav'>
          <li>
            <Accounts />
          </li>
          <li>
            <a href='#' onClick={this.onBinClick.bind(this)}>Create Bin</a>
          </li>
        </ul>
      </nav>
    );
  }
}
