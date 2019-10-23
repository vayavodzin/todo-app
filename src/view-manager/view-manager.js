import { AbstractViewManager } from './abstract-view-manager.js';

export class ViewManager extends AbstractViewManager {
  render(element) {
    console.log(element);
  }
}
