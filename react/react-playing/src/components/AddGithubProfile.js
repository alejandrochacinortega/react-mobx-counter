import React from 'react';
import GithubStore from '../stores/GithubStore';
import Error from './Error';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class AddGithubProfile extends React.Component {

  @observable profileNotFound;

  async addProfile(event) {
    event.preventDefault();
    let name             = this.refs.name.value;
    this.refs.name.value = "";
    try {
      await GithubStore.AddProfile(name);
      this.profileNotFound = "";

    }
    catch (error) {
      // this.errorMessage = error;
      this.profileNotFound = "Profile Nor found. Please try again.";
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addProfile.bind(this)}>
          <input type="text" placeholder="Search for a github profile" ref="name"/>
          <button onClick={this.addProfile.bind(this)}>Add</button>
        </form>
        <Error profileNotFound={this.profileNotFound} />
      </div>
    )
  }
}

export default AddGithubProfile;