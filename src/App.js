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
      answerArray: [],
      usersChoice: [],
      result: ""
    }
    this.resetGame = this.resetGame.bind(this);
    this.gatherUsersColors = this.gatherUsersColors.bind(this);
    this.sendColor = this.sendColor.bind(this);
    this.win = this.win.bind(this);
  }

  componentWillMount() {
    let colorList = ['Red', 'Blue', 'Yellow', 'Green'];

    for (let i = 0; i < 6; i++) {
      let randomIdx = Math.floor(Math.random()*colorList.length) // 0 - 3
      let randomColor = colorList[randomIdx]; // colorList[0], colorList[1], colorList[2], colorList[3]
      this.state.answerArray.push(`${randomColor}`);
    }
    this.setState({answerCombo: this.state.answerArray})
  }

  resetGame() {
    this.setState({
      answerCombo: [],
      answerArray: [],
      usersChoice: []
    }, this.componentWillMount);
  }

  gatherUsersColors() {
    this.state.usersChoice;
  }

  sendColor(e){
    this.state.usersChoice.push(e.target.innerText);
    this.setState({usersChoice: this.state.usersChoice});
  }

  win() {

    const a = this.state.answerArray;
    const b = this.state.usersChoice;
    let isSame = true;
    if (a === b) isSame = true;
    if (a == null || b == null) isSame = false;
    if (a.length != b.length) isSame = false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) isSame = false;
    }

    if(isSame){
      this.setState({
        result: "You Win!"
      })
    } else {
      this.setState({
        result: "Try Again"
      })
    }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SIMON. A MEMORY GAME.</h1>
        </header>
          <div className="row">
            <div id="backgroundSize1">
                <div className="column1"> <button onClick={this.sendColor} type="button">Red</button> </div>
           </div>
            <div id="backgroundSize2">
                <div className="column2"> <button onClick={this.sendColor} type="button">Yellow</button> </div>
           </div>
            <div id="backgroundSize3">
               <div className="column3"> <button onClick={this.sendColor} type="button">Green</button> </div>
            </div>
           <div id="backgroundSize4">
              <div className="column4"> <button onClick={this.sendColor} type="button">Blue</button> </div>
            </div>
      </div>

        <div className="randomColors">
          <h2>Pick the correct color sequence, then click ENTER.</h2>
          <h1>{ this.state.answerCombo }</h1>
          <div className="start"> <button type="button" onClick={this.win}>ENTER</button> </div>
        </div>

        <h1>{this.state.usersChoice}</h1>

      <div className="result">
        <h1>{ this.state.result }</h1>
      </div>
        <button onClick={this.resetGame}>Reset the game</button>
      </div>
    );
  }
}

export default App;
