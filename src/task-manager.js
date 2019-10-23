import { Task } from "./task.js";

export class TaskManager {
    constructor(store) {
      this.store = store;
    }
  
    create(title) {
      let task = new Task(title);
      return this.store.add(task).then(task => this.clone(task));
    }
  
    getTasks() {
      return this.store.fetch()
        .then(tasks => tasks.map(task => this.clone(task)))
        .then(tasks => tasks.sort((taskPrev, taskNext) => taskPrev.timestamp - taskNext.timestamp));
    }

    getTask(taskId = null) {
      return this.store.fetch(taskId);
    }
  
    update(taskId) {
      const task = this.store.fetch(taskId);
      return task
        .then(task => {
          const clonedTask = this.clone(task);
          clonedTask.toggle();
          return clonedTask;
        })
        .then(updatedTask => this.store.update(taskId, updatedTask))
        .then(task => this.clone(task));
    }
  
    delete(taskId) {
      return this.store.delete(taskId);
    }

    clone(task) {
      return Object.assign(new Task, task);
    }
  
  }
