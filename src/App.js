import  "./App.css";
import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Teste from "./components/tabs/teste";
import Login from "./components/tabs/login";



class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/"><Login /></Route>
            <Route path="/User"><Teste /></Route> 
           
          </Switch>
        </BrowserRouter>
        
      </div>
    )
  }
}

export default App;
