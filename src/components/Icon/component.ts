import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getValue } from '../helpers';

class Icon extends HTMLElement {
  private onClickEvent?: () => void;

  constructor() {
    super();
    this.onclick = this.onClick.bind(this);
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    const className = renderProps.className;
    const value = getValue(renderProps.attributes);
    this.className = `icon fa fa-fw fa-${value} ${className}`;
    Object.assign(this.style, renderProps.style);

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

export default Icon;
