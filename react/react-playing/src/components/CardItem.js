import React from 'react';

class CardItem extends React.Component {
  render() {
    let taskStyle = {
      width : "100px",
      height: "100px"
    };

    return (

      <tr>
        <td>
          <img style={taskStyle} src={this.props.profile.avatar_url} alt=""/>
        </td>
        <td>
          <h3>{this.props.profile.name}</h3>
        </td>
        <td>
          <h3>{this.props.profile.login}</h3>
        </td>
      </tr>
    )
  }
}

export default CardItem;