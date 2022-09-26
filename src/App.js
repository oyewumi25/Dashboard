import  "./App.css";
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./components/tabs/teste";
import Login from "./components/tabs/Login";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" > <Login /> </Route>
            <Route path="/main"> <Home /> </Route>  
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
