import React from 'react';
import {observer} from 'mobx-react';

import Increment from './Increment';
import Result from './Result';
import Header from './Header';
import Card from './Card';
import AddGithubProfile from './AddGithubProfile';
import Game from './Game';







@observer
class App extends React.Component {

  render() {
    return (
      <div>
        <Header title="Counter App" />
        <Result />
        <Increment/>
        <hr/>
        <Header title="Github Card Interface" />
        <AddGithubProfile />
        <Card />
        <hr />
        <Header title="Game Component" />
        <Game />
      </div>
    )
  }
}

export default App;