import {action, computer, observable} from 'mobx';

class CounterModel {
  @observable value;

  constructor(value) {
    this.value = value
  }
}

export default CounterModel;


