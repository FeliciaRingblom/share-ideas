import React from 'react';
import App from './components/app';
import Home from './components/home/home';
import IdeaList from './components/idea/ideaList';
import IdeaDetail from './components/idea/ideaDetail';
import ManageIdea from './components/idea/manageIdea';
import { IndexRoute, browserHistory, Router, Route } from 'react-router';

export default () => {
  return (
     <Router history={ browserHistory }>
      <Route path="/" component = { App }>
        <IndexRoute component={ Home }/>
        <Route path="ideas" component={ IdeaList }/>
        <Route path="idea/:idea" component={ IdeaDetail } />
        <Route path="/add-idea" component ={ ManageIdea } />
      </Route>
    </Router>
  );
};
