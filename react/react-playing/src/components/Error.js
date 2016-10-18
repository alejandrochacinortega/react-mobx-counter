import React from 'react';
import GithubStore from '../stores/GithubStore';
import {observer} from 'mobx-react';


@observer
class Error extends React.Component {
  isError() {
    let profiles = GithubStore.profiles;
    profiles.map(profile => {
        console.log('yes! ', profile);
    } )
    
  }

  render() {
    {this.isError()}
    return (
      <div>
        <p style={{color: 'red'}}>{this.props.profileNotFound}</p>
      </div>
    )
  }
}

export default Error;