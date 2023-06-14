import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getAttributeValue, getReadOnly, getValue } from '../../helpers';

class InputTextArea extends HTMLTextAreaElement {
  private _renderProps?: ExternalElementNodePropsType;
  private timeoutReference: NodeJS.Timeout | undefined;
  private timeout: number;

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
    this.rows = getAttributeValue(renderProps.attributes, 'rows', 3);
  }

  onChange(event: Event) {
    this._renderProps?.onUpdateBinding('value', (event?.target as HTMLInputElement)?.value);
  }

  onLostFocus(event: Event) {
    this._renderProps?.onExecuteEvent('OnChange', [(event?.target as HTMLInputElement)?.value]);
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

export default InputTextArea;
