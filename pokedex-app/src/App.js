
import './App.css';
import React from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'
import ProtectedRoute from "./components/ProtectedRoute";
import LogIn from "./components/LogIn";
import Pokedex from "./components/Pokedex";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
            <ProtectedRoute path='/pokedex'>
                <Pokedex/>
            </ProtectedRoute>
            <Route path='*'>
                <LogIn/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
