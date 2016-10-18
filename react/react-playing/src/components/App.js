import React from 'react';
import {observer} from 'mobx-react';

import Increment from './Increment';
import Result from './Result';




@observer
class App extends React.Component {

  render() {
    return (
      <div>
        <Result />
        <Increment/>
      </div>
    )
  }
}

export default App;