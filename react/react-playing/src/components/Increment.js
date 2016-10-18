import React from 'react';
import CounterStore from '../stores/CounterStore';
import {observer} from 'mobx-react';

@observer
class Increment extends React.Component {

  render() {
    return (
      <div>
        <button onClick={() => {CounterStore.increment(1);}}>Increment +1</button>
        <button onClick={() => {CounterStore.increment(5);}}>Increment +5</button>
        <button onClick={() => {CounterStore.increment(10);}}>Increment +10</button>
        <button onClick={() => {CounterStore.increment(100);}}>Increment +100</button>
      </div>
    )
  }
}

export default Increment;