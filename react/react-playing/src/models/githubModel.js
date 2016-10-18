import {observable} from 'mobx';

class GithubModel {
  @observable avatar_url;
  @observable name;
  @observable login;

  constructor(profile) {
    this.avatar_url = profile.avatar_url;
    this.name       = profile.name;
    this.login = profile.login,
    this.isFound = true
  }
}

export default GithubModel;


