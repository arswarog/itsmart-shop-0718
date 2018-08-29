import * as React from 'react';
import './App.css';

import { Catalog } from './components/catalog/Catalog';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header/>
        <Catalog/>
        <Footer/> 
      </div>
    );
  }
}

export default App;
