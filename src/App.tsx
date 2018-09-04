import * as React from 'react';
import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Catalog } from './pages/Catalog';

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
