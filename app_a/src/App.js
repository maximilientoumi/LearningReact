import React, { Component } from 'react';
import Card from './Components/Card';
import './App.css';



class App extends Component {
  render() {
    return (
      <div>
        <Card title={'title'}/>
        <Card title={'title'} subtitle={'Subtitle'}/>
      </div>
    );
  }
}

export default App;
