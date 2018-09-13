
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import Menu from './components/_navigation/Menu';
import Home from './components/Home';
import RSVP from './components/RSVP';
import Error from './components/Error';




class App extends Component {
  render() {
    return (
      <ParallaxProvider>
      <BrowserRouter>
        <div>
          <Menu />
          <Switch>
            <Route path="/" component={Home} exact />
            {/* <Route path="/about" component={About} />
            <Route path="/work" component={Work} /> */}
            <Route path="/rsvp" component={RSVP} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
      </ParallaxProvider>
      
    );
  }
};

export default App; 
