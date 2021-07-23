import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
// import SingleThought from './pages/SingleThought';
import Header from './components/Header';
import Footer from './components/Footer';
// import './App.css';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client} >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;