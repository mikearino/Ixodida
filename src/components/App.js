import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import NewTick from './NewTick';
import TickMap from './TickMap';
import Info from './Info';
import { Switch, Route } from 'react-router-dom';
import Bootstrap from 'react-bootstrap'

const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Info} />
        <Route path='/newtick' component={NewTick} />
        <Route path='/tickmap' component={TickMap} />
      </Switch>
      
    </div>
  );
}

export default App;
