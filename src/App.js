import React, { Component } from 'react';
import './App.css';

import Top from "./components/Top/Top.jsx"
import Bottom from "./components/Bottom/Bottom.jsx"

class App extends Component {
  state = {
    color: "",
  };

  onSelected = () => {
    console.log('On is clicked')
    this.setState({ color: "white" });
  };

  offSelected = () => {
    console.log('Off is clicked')
    this.setState({ color: "lightpink" });
  };

  render() {
    return (
      <div className="App">

      <Top onSelected= {this.onSelected} backgroundColor={this.state.color} />
      <hr />
      <Bottom offSelected= {this.offSelected} backgroundColor={this.state.color} />
      
      </div>
    );
  }
}

export default App;
