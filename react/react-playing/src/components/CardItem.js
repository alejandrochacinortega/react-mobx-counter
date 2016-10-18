import React from 'react';
import {observer} from 'mobx-react';
import GithubStore from '../stores/GithubStore';

@observer
class CardItem extends React.Component {
  onDelete(username) {
    console.log('card item ');
    GithubStore.onDelete(username)
  }

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
        <td>
          <button onClick={() => {
            this.onDelete(this.props.profile.login)
          }}>delete</button>
        </td>
      </tr>
    )
  }
}

export default CardItem;