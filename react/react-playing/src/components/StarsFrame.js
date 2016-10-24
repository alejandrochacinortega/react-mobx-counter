import React from 'react';

class StarsFrame extends React.Component {
  render() {
    var numberOfStars = Math.floor(Math.random()*9) + 1;
    var stars = [];
    for (var i = 0; i < numberOfStars; i++ ) {
      stars.push(
        <span className="glyphicon glyphicon-star"></span>
      )
    }
    return (
      <div id="stars-frame">
        <div className="well">
          {stars}
        </div>
      </div>
    )
  }
}

export default StarsFrame;