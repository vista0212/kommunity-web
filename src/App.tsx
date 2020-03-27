import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './lib/graphql/client';
import { Helmet } from 'react-helmet';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Mainpage from './pages/Mainpage';
import { GlobalStyle } from './GlobalStyle';
import Registerpage from './pages/Registerpage';

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Helmet>
        <title>kommunity</title>
        <meta name="description" content="내가 만드는 게시판" />
      </Helmet>
      <Header>
        <h1>kommunity</h1>
      </Header>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Mainpage} exact />
          <Route path="/register" component={Registerpage} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
