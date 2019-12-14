import React, { Component } from 'react';
import {DynamicForm} from './components/DynamicForm';
import {Profile} from './components/Profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DynamicForm/>
        {/* <Profile /> */}
      </div>
    );
  }
}

export default App;
