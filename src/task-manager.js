import { Task } from "./task.js";

export class TaskManager {
    constructor(store) {
      this._store = store;
    }

    get store() {
      return this._store;
    }
  
    create(title) {
      let task = new Task(title);
      return this._store.add(task).then(task => this.clone(task));
    }
  
    getTasks() {
      return this._store.fetch()
        .then(tasks => tasks.map(task => this.clone(task)))
        .then(tasks => tasks.sort((taskPrev, taskNext) => taskPrev.timestamp - taskNext.timestamp));
    }

    getTask(taskId = null) {
      return this._store.fetch(taskId);
    }
  
    toggle(taskId) {
      const task = this._store.fetch(taskId);
      return task
        .then(task => {
          const clonedTask = this.clone(task);
          clonedTask.toggle();
          return clonedTask;
        })
        .then(updatedTask => this._store.update(taskId, updatedTask))
        .then(task => this.clone(task));
    }
  
    delete(taskId) {
      return this._store.delete(taskId);
    }

    clone(task) {
      return Object.assign(new Task, task);
    }
  
  }
