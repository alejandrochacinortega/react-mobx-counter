import React from 'react';

class NumbersFrame extends React.Component {
  render() {
    var numbers = [];
    for (var i = 0; i < 9; i++ ) {
      numbers.push(
        <div className="number">{i}</div>
      )
    }

    return (
      <div id="numbers-frame">
        <div className="well">
          {numbers}
        </div>
      </div>
    )
  }
}

export default NumbersFrame;