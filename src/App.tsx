import * as React from 'react';
import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';
import { Router, Route, Switch, Redirect } from 'react-router';
import { history } from './history';
import { Cart } from './pages/Cart';

class App extends React.Component {
  public render() {
    return (
      <Router history={history}>
        <div>
          <Header />
          <Switch> 
            <Route path="/category/:id/:idSub" component={Catalog} />
            <Route path="/category/:id" component={Catalog} />
            <Route path="/cart/" component={Cart} />
            {/* <Route path="/" exact={true} component={Catalog} /> */}
            <Redirect path="/" to="/category/1/12" />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
