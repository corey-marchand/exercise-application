import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' components={} />
        <Route exact path='/losefat' components={} />
        <Route exact path='/buildmuscle' components={} />
        <Route exact path='/buildstrength' components={} />
        <Route exact path='/athleticSkills' components={} />
        <Route exact path='/jointFlexibility' components={} />
      </Switch>
    </div>
  );
}

export default App;
