
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
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
            <Route path='/login'>
                <LogIn/>
            </Route>
            <Route path='/'
                render={({location})=> <Redirect to={{pathname: '/pokedex', from: location}}/>}  >
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
