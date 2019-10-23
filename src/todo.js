export class Todo {
    constructor(taskManager, view) {
      this.taskManager = taskManager;
      this.view = view;
    }
  
    async create(task) {
      const createdTask = await this.taskManager.create(task);
      this.view.render(createdTask);
    }
  
    async getTasks() {
      const result = await this.taskManager.getTasks() || [];
      result.forEach(element => this.view.render(element));
    }

    async getTask(taskId) {
      const task = await this.taskManager.getTask(taskId);
      this.view.render(task)
    }
  
    async toggle(taskId) {
      const updatedTask = await this.taskManager.toggle(taskId);
      this.view.render(updatedTask);
    }
  
    async delete(taskId) {
      await this.taskManager.delete(taskId);
      this.getTasks();
    }
  }
