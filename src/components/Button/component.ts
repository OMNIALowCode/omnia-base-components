import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getAttributeValue } from '../helpers';

class Button extends HTMLButtonElement {
  constructor() {
    super();
    this.onclick = this.onClick.bind(this);
  }

  private onClickEvent?: () => void;

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    this.disabled = getAttributeValue(renderProps.attributes, 'disabled', false);

    if (renderProps.implementedEvents.includes('OnClick'))
      this.onClickEvent = () => renderProps?.onExecuteEvent('OnClick', []);
  }

  onClick(e) {
    if (this.onClickEvent) {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.onClickEvent();
    }
  }
}

export default Button;
