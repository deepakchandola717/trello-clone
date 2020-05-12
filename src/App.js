import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AllBoards from './Components/AllBoards/AllBoards';
import TopNavBar from './Components/TopNavBar/TopNavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Router>
        <Switch>
          <Route path="/boards" exact component={AllBoards} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
