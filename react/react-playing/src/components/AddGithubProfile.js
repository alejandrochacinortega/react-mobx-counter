import React from 'react';
import GithubStore from '../stores/GithubStore';


class AddGithubProfile extends React.Component {
  addProfile(event) {
    event.preventDefault();
    let name = this.refs.name.value;
    this.refs.name.value = "";
    GithubStore.AddProfile(name)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addProfile.bind(this)}>
          <input type="text" placeholder="Search for a github profile" ref="name"/>
          <button onClick={this.addProfile.bind(this)}>Add</button>
        </form>
      </div>
    )
  }
}

export default AddGithubProfile;