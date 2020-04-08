import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import HelloWorld from './components/HelloWorld';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
  return (
    <Provider store={store}>
    <div className="main-nav">
    <AppNavbar />
    <HelloWorld />
    </div>
    </Provider>
    
  );
 }
}

export default App;
