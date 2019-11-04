import { AbstractViewManager } from './abstract-view-manager.js';
import { TaskView } from '../view/task-view.js';

export class ViewManager extends AbstractViewManager {
  render(element, action) {
    let domElement = document.getElementById(element.id);
    let tempElement = document.createElement('div');
    tempElement.innerHTML = TaskView(element);
    if (domElement) {
      domElement.replaceWith(tempElement.firstChild);
    } else {
      document.getElementById('todo-list-id').innerHTML += TaskView(element);
    }
  }

  remove(elementId) {
    let domElem = document.getElementById(elementId);
    if (domElem) {
      domElem.parentElement.removeChild(domElem);
    }
  }

}
