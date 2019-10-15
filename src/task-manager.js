import { Task } from "./task.js";

export class TaskManager {
    constructor(store) {
      this.store = store;
    }
  
    create(title) {
      let task = new Task(title);
      task.id = this.store.add(task) - 1;
    }
  
    read(taskId = null) {
      return this.store.fetch(taskId);
    }
  
    update(taskId) {
      this.store.update(taskId);
    }
  
    delete(taskId) {
      this.store.delete(taskId);
    }
  
  }