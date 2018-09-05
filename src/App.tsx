import * as React from 'react';
import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Router, Route, Switch, Redirect } from 'react-router';
import { history } from './history';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Router history={history}>
          <Switch>
            <Route path="/category/:id" component={Catalog} />
            {/* <Route path="/" exact={true} component={Catalog} /> */}
            <Redirect path="/" to="/category/12" />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
