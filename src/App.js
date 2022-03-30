import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Tourlist from './components/Tourlist/Tourlist';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Tourlist/>
      </div>
    );
  }
}

export default App;
