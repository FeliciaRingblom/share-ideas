import React from 'react';
import App from './components/app';
import {Router, Route} from 'react-router';

export default () => {
  return (
    <Router>
      <Route path="/" component={ App }/>
    </Router>
  );
};
