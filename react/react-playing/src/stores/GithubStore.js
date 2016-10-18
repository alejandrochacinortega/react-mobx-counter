import {observable, action, computed} from 'mobx';
import GithubModel from '../models/githubModel';
import _ from 'lodash';


const PROFILES = [
  {
    avatar_url: "https://avatars.githubusercontent.com/u/10740905?v=3",
    name      : "Omar Alejandro Chacin Ortega",
    login     : "omarchacinortega13"
  },
  {
    avatar_url: "https://avatars.githubusercontent.com/u/239742?v=3",
    name      : "Peter Hunt",
    login     : "peterhunt"
  }
];

class GithubStore {
  @observable profiles = [];

  constructor() {
    PROFILES.map(profile => this.profiles.push(new GithubModel(profile)));
  }

  @action
  async   AddProfile(name) {
    let response = await fetch(`https://api.github.com/users/${name}`);
    let profile  = await response.json();
    if (profile.message) {
      throw Error(profile.message);
    }
    this.profiles.push(new GithubModel(profile));
  }

  @action
  onDelete(username) {
    _.remove(this.profiles, profile => profile.login == username)

  }
}

const githubStore = new GithubStore();

export default githubStore;

