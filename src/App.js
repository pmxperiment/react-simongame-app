import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import './Simon.js'
//import '.ColorSequence.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      answerCombo: [],
      result: "",
    }
  }
  componentWillMount() {
    let colorList = ['red', 'blue', 'yellow', 'green'];
    let answerArray = [];

    for (let i = 0; i < 6; i++) {
      let randomIdx = Math.floor(Math.random()*colorList.length) // 0 - 3
      let randomColor = colorList[randomIdx]; // colorList[0], colorList[1], colorList[2], colorList[3]
      answerArray.push(randomColor);
    }
    this.setState({answerCombo: answerArray})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SIMON. A MEMORY GAME.</h1>
        </header>
          <div class="row">
            <div id="backgroundSize1">
                <div class="column1"> <button type="button">RED</button> </div>
           </div>
            <div id="backgroundSize2">
                <div class="column2"> <button type="button">YELLOW</button> </div>
           </div>
            <div id="backgroundSize3">
               <div class="column3"> <button type="button">GREEN</button> </div>
            </div>
           <div id="backgroundSize4">
              <div class="column4"> <button type="button">BLUE</button> </div>
            </div>
      </div>

        <div class="randomColors">
          <h2>Pick the correct color sequence, then click ENTER.</h2>
          <h1>{ this.state.answerCombo }</h1>
          <div class="start"> <button type="button">ENTER</button> </div>
        </div>

      <div class="result">
        <h1>{ this.state.result }</h1>
      </div>
      </div>
    );
  }
}

export default App;
