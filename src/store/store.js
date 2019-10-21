import { AbstractStore } from './abstract-store.js';


export class Store extends AbstractStore {
  constructor() {
    super();
    this.store = [];
  }

  fetch(id = null) {
    return new Promise(resolve => {
      if (id) {
        resolve(this.store[id]);
      }
      resolve(this.store)
    });

  }

  add(task) {
    return new Promise(resolve => {
      this.store[parseInt(task.id)] = task;
      resolve(task)
    });
  }

  update(taskId, task) {
    return new Promise(resolve => {
      if (this.store[taskId]) {
        this.store[taskId] = task;
        resolve(task)
      }
    });
  }

  delete(id) {
    return new Promise(resolve => {
      if (this.store[id]) {
        delete this.store[id];
        resolve(true);
      }
    });
  }

}
