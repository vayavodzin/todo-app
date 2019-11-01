import { AbstractViewManager } from './abstract-view-manager.js';
import { TaskView } from '../view/task-view.js';

export class ViewManager extends AbstractViewManager {
  render(element) {
    let domElement = document.getElementById(element.id);
    if (domElement) {
      domElement.innerHTML = TaskView(element);
    } else {
      document.getElementById('todo-list').innerHTML += TaskView(element);
    }
  }
}
