import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getReadOnly, getValue } from '../../helpers';

class Input extends HTMLInputElement {
  private _renderProps?: ExternalElementNodePropsType;
  private timeoutReference: any;
  private timeout: any;

  constructor() {
    super();

    this.onblur = this.onLostFocus.bind(this);
    this.onchange = this.onChange.bind(this);
    this.onkeyup = this.onKeyUp.bind(this);
    this.timeout = 5e2;
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    this._renderProps = renderProps;
    this.value = getValue(renderProps.attributes);
    this.readOnly = getReadOnly(renderProps.attributes);
  }

  onLostFocus(e) {
    this._renderProps?.onUpdateBinding('value', e.target.value);
  }

  onChange(e) {
    this._renderProps?.onExecuteEvent('OnChange', [e.target.value]);
  }

  onKeyUp(ev: KeyboardEvent) {
    if (this.timeoutReference) clearTimeout(this.timeoutReference);
    if (ev.key === 'Tab') return;
    const input = this;
    this.timeoutReference = setTimeout(function () {
      input._renderProps?.onUpdateBinding('value', input.value);
    }, this.timeout);
  }
}

export default Input;
