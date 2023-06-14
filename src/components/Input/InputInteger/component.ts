import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getAttributeValue, getReadOnly, getValue } from '../../helpers';

class InputInteger extends HTMLInputElement {
  private _renderProps?: ExternalElementNodePropsType;
  private timeoutReference: NodeJS.Timeout | undefined;
  private timeout: number;

  constructor() {
    super();
    this.type = 'number';
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

    this.valueAsNumber = getValue(renderProps.attributes);
    this.readOnly = getReadOnly(renderProps.attributes);

    this.max = getAttributeValue(renderProps.attributes, 'maximumValue', undefined);
    this.min = getAttributeValue(renderProps.attributes, 'minimumValue', undefined);
  }

  onChange(event: Event) {
    this._renderProps?.onUpdateBinding('value', (event?.target as HTMLInputElement)?.valueAsNumber);
  }

  onLostFocus(event: Event) {
    this._renderProps?.onExecuteEvent('OnChange', [(event?.target as HTMLInputElement)?.valueAsNumber]);
  }

  onKeyUp(ev: KeyboardEvent) {
    if (this.timeoutReference) clearTimeout(this.timeoutReference);
    if (ev.key === 'Tab') return;
    const input = this;
    this.timeoutReference = setTimeout(function () {
      input._renderProps?.onUpdateBinding('value', input.valueAsNumber);
    }, this.timeout);
  }
}

export default InputInteger;
