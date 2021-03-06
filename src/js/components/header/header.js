import React from 'react';
import { Link } from 'react-router';

require('../../../sass/_header.scss');

export default () => {
  return (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <ul className="nav navbar-nav navbar-left">
        <li><Link to="/ideas">Ideas</Link></li>
        <li><Link to="/add-idea">Add idea</Link></li>
      </ul>
    </div>
  </nav>
  );
};
