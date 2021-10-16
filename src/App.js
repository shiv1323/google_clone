import React from 'react';
import './App.css';
import Home from './component/pages/Home';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import SearchPage from './component/pages/SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            {/* home page */}
            <Home />
          </Route>
        </Switch>

      </Router>


    </div>
  );
}

export default App;
