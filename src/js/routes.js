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
        <Route name="ideaList" path="ideas" component={ IdeaList }/>
        <Route name="ideaDetail" path="idea/:idea" component={ IdeaDetail } />
        <Route name="addIdea" path="/add-idea" component ={ ManageIdea } />
        <Route name="editIdea" path="/edit-idea/:idea" component ={ ManageIdea } />
      </Route>
    </Router>
  );
};
