import React from 'react';
import StarsFrame from './StarsFrame';
import AnswerFrame from './AnswerFrame';
import ButtonFrame from './ButtonFrame';
import NumbersFrame from './NumbersFrame';




class Game extends React.Component {
  render() {
    return (
      <div className="container" id="game">
        <h1>Play Nine </h1>
        <StarsFrame />
        <ButtonFrame/>
        <AnswerFrame/>
        <NumbersFrame />
      </div>
    )
  }
}

export default Game;