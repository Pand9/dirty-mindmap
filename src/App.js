import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {cards: []};
    // this.state = {card: {top: 100, left: 200}};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log('dummy');
    // this.setState(res);
    const card = {
      top: event.pageY,
      left: event.pageX,
    };
    this.setState((state, props) => {
      var cards = state.cards;
      cards.push({key: cards.length.toString(), ...card});
      return {cards: cards};
    });
  }

  render() {
    console.log('hehe');
    const buttons = this.state.cards.map((card) => 
      <Button variant="contained" color="primary" key={card.key} style={{left: card.left, top: card.top, position: 'absolute'}}>
        Button number {card.key}
      </Button>
    );
    return (
      <div className='App-sheet' onClick={this.handleClick}>
        {buttons}
      </div>
    );
  }
}

export default App;
