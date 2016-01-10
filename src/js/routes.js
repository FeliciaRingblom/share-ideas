import React from 'react';
import App from './components/app';
import IdeaList from './components/idea/ideaList';
import IdeaDetail from './components/idea/ideaDetail';
import { browserHistory, Router, Route } from 'react-router';

export default () => {
  return (
     <Router history={ browserHistory }>
      <Route path="/" component={ App }/>
      <Route path="ideas" component={ IdeaList }/>
      <Route path="idea/:idea" component={ IdeaDetail } />
    </Router>
  );
};
