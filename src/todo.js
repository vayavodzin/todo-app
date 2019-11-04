export class Todo {
    constructor(taskManager, viewManager) {
      this.taskManager = taskManager;
      this.viewManager = viewManager;
    }
  
    async create(title) {
      const createdTask = await this.taskManager.create(title);
      this.viewManager.render(createdTask);
    }
  
    async getTasks() {
      const result = await this.taskManager.getTasks() || [];
      result.forEach(element => this.viewManager.render(element));
    }

    async getTask(taskId) {
      const task = await this.taskManager.getTask(taskId);
      this.viewManager.render(task)
    }
  
    async toggle(taskId) {
      const updatedTask = await this.taskManager.toggle(taskId);
      this.viewManager.render(updatedTask);
    }
  
    async delete(taskId) {
      let removed = await this.taskManager.delete(taskId);
      if(removed) {
        this.viewManager.remove(taskId);
        this.getTasks();
      }
    }
  }
