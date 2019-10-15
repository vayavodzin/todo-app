import { AbstractStore } from './abstract-store.js';


export class Store extends AbstractStore {
  constructor() {
    super();
    this.store = [];
  }

  fetch(id = null) {
    if (id) {
      return this.store[id];
    }

    return this.store;
  }

  add(task) {
    return this.store.push(task);
  }

  update(taskId) {
    if (this.store[taskId]) {
      let task = this.store[taskId];
      task.toggle();
    }
  }

  delete(id) {
    if (this.store[id]) {
      delete this.store[id];
    }
  }

}
