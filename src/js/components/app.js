import React from 'react';
import Header from './header/header';

require('../../sass/_app.scss');

export default ( props ) => {
  return (
    <div className="container">
      <Header />
      { props.children }
    </div>
  );
};
