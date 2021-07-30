import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './normalize.css';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup';
import Header from './components/navBar/navBar';
import NoMatch from './pages/NoMatch';
import Login from './pages/login/Login';
// import Footer from './components/footer/footer.js'; 

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </>
        {/* <Footer /> */}
      </BrowserRouter>

    </ApolloProvider>
  );
}

export default App;