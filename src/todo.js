export class Todo {
    constructor(taskManager, view) {
      this.taskManager = taskManager;
      this.view = view;
    }
  
    async create(task) {
      const createdTask = await this.taskManager.create(task);
      this.render(createdTask);
    }
  
    async read(taskId = null) {
      const result = await this.taskManager.read(taskId) || [];
      result.forEach(element => this.render(element));
    }
  
    async update(taskId) {
      const updatedTask = await this.taskManager.update(taskId);
      this.render(updatedTask)
    }
  
    async delete(taskId) {
      await this.taskManager.delete(taskId);
      this.read();
    }
  
    render(element) {
      this.view.render(element);
    }
  }
