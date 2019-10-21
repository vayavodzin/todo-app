import { Todo } from "./todo.js";
import { TaskManager } from "./task-manager.js";
import { Store } from "./store/store.js";
import { ViewManager } from "./view-manager/view-manager.js";


class App {
  init() {
    let store = new Store();
    let taskManager = new TaskManager(store);
    let view = new ViewManager();
    let todo = new Todo(taskManager, view);
    todo.render();
    return {view, todo};
  }
}

export const app = new App().init();
