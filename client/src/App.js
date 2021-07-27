import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './pages/home/Home';
import Header from './components/Header';
import Footer from './components/Footer.js';


function App() {
  return (

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;