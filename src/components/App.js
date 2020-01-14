import React from "react";
import "../App.css";
import NavBar from "./NavBar";
import TickMap from "./TickMap";
import Info from "./Info";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Info} />
        <Route path="/tickmap" component={TickMap} />
      </Switch>
    </div>
  );
};

export default App;
