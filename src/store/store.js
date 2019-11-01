import { AbstractStore } from './abstract-store.js';


export class Store extends AbstractStore {
  constructor() {
    super();
    this._store = [];
  }

  get store() {
    return this._store;
  }

  fetch(taskId = null) {
    return new Promise(resolve => {
      if (!taskId) {
        resolve(this.store)
      }
      const taskIndex = this.getTaskIndex(taskId);
      if (taskIndex !== -1) {
        resolve(this.store[taskIndex]);
      }
    });
  }

  add(task) {
    return new Promise(resolve => {
      this._store.push(task);
      resolve(task)
    });
  }

  update(taskId, task) {
    return new Promise((resolve, reject) => {
      const taskIndex = this.getTaskIndex(taskId);
      if (taskIndex !== -1) {
        this.store[taskIndex] = task;
        resolve(task)
      }
      reject(new Error('index not found'))
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      const taskIndex = this.getTaskIndex(id);
      if (taskIndex !== -1) {
        delete this.store[taskIndex];
        resolve(true);
      }
      reject(new Error('index not found'));
    });
  }

  getTaskIndex(taskId){
    return this._getTaskIndex(taskId);
  }

  _getTaskIndex(taskId){
    return this._store.findIndex(task => task && (task.id === taskId));
  }

}
