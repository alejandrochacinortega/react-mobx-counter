import {
  action,
  computed,
  observable
} from 'mobx';

import CounterModel from '../models/counterModel';

class CounterStore {
  @observable value = 0;

  @action
  increment(amount) {
    this.value = this.value + amount;
  }
}

const counterStore = new CounterStore();

export default counterStore;

