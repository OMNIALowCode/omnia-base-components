import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getValue } from '../helpers';

class Text extends HTMLSpanElement {
  constructor() {
    super();
    this.onclick = this.onClick.bind(this);
  }

  private onClickEvent?: () => void;

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = `label ${renderProps.className ? renderProps.className : ''}`;
    Object.assign(this.style, renderProps.style);
    this.innerText = getValue(renderProps.attributes);
    if (renderProps.implementedEvents.includes('OnClick'))
      this.onClickEvent = () => renderProps?.onExecuteEvent('OnClick', []);
  }

  onClick(event: MouseEvent) {
    if (this.onClickEvent) {
      event.preventDefault();
      event.stopImmediatePropagation();
      this.onClickEvent();
    }
  }
}

export default Text;
