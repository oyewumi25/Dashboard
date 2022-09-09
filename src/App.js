import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import First from "./components/tabs/First";
import Login from "./components/tabs/Login";


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" > <Login /> </Route>
            {/* <Route path="/main"> <First /> </Route>   */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
