import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getAttributeValue } from '../helpers';

class Button extends HTMLButtonElement {
  private onClickEvent?: () => void;

  constructor() {
    super();
    this.onclick = this.onClick.bind(this);
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    this.disabled = getAttributeValue(renderProps.attributes, 'disabled', false);

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

export default Button;
