import React from 'react';
import logo from './logo.svg';
import './App.css';

class Board extends React.Component {
  getInitialState(){
    return {
      score: 0,
      winner: Math.random(this.props.count - 1)
    };
  }

  renderItem(i){
    var clsName = "cell";
    if (this.state.winner == i){
      clsName += "winner";
    }
    return <button onClick = {this.clicked.bind(this, i)} className = {clsName}>{i}</button>
  }

  clicked(i){
    if (this.state.winner == i){
      this.setState({
        winner : Math.random(this.props.count - 1),
        score : this.state.score + 5
      });
    }
    else{
      this.setState({
        score : this.state.score - 5
      });
    }
  }

  render() {
    var btns = [];
    for(var i = 0; i < this.props.count; i++){
      btns.push(this.renderItem(i));
    }

    return <div>
        <p>score: {this.state.score}</p>
        {btns}
      </div>;		
  }
}

export default Board;
