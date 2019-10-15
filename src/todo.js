export class Todo {
    constructor(taskManager, view) {
      this.taskManager = taskManager;
      this.view = view;
    }
  
    create(task) {
      this.taskManager.create(task);
      this.render();
    }
  
    read(taskId = null) {
      return new Promise(resolve => {
        let result = this.taskManager.read(taskId) || [];
        resolve(result);
      });
    }
  
    update(taskId) {
      this.taskManager.update(taskId);
      this.render();
    }
  
    delete(taskId) {
      this.taskManager.delete(taskId);
      this.render();
    }
  
    render() {
      this.read().then(result => {
        this.view.render(result);
      });
    }
  
  }