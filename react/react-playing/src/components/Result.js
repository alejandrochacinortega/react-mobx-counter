import React from 'react';
import {observer} from 'mobx-react';


import CounterStore from '../stores/CounterStore';

@observer
class Result extends React.Component {
  render() {
    let value = CounterStore.value;
    return (
      <div>
        <p>Value is {value}</p>
      </div>
    )
  }
}

export default Result;