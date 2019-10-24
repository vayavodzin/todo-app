export class Todo {
    constructor(taskManager, viewManager) {
      this._taskManager = taskManager;
      this._viewManager = viewManager;
    }

    get taskManager() {
      return this._taskManager;
    }

    get viewManager() {
      return this._taskManager;
    }
  
    async create(task) {
      const createdTask = await this._taskManager.create(task);
      this._viewManager.render(createdTask);
    }
  
    async getTasks() {
      const result = await this._taskManager.getTasks() || [];
      result.forEach(element => this._viewManager.render(element));
    }

    async getTask(taskId) {
      const task = await this._taskManager.getTask(taskId);
      this._viewManager.render(task)
    }
  
    async toggle(taskId) {
      const updatedTask = await this._taskManager.toggle(taskId);
      this._viewManager.render(updatedTask);
    }
  
    async delete(taskId) {
      await this._taskManager.delete(taskId);
      this.getTasks();
    }
  }
