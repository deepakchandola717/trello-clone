import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllBoards from './Components/AllBoards';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch> 
        <Route
          path="/boards"
          exact
          render={() => <AllBoards/>}
        />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
