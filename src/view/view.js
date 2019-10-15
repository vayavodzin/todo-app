import { AbstractView } from './abstract-view.js';

export class View extends AbstractView {
  render(element) {
    console.log(element);
  }
}
