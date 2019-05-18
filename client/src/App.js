import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts/:postId/" component={PostDetail} />
        <Route exact path="/contacts/" component={Contacts} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
