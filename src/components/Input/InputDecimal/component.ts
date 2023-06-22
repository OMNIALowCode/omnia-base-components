import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getAttributeValue, getReadOnly, getValue } from '../../helpers';

class InputDecimal extends HTMLInputElement {
  private _renderProps?: ExternalElementNodePropsType;

  constructor() {
    super();
    this.type = 'number';
    this.onchange = this.onChange.bind(this);
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
    const decimalPlaces = getAttributeValue(renderProps.attributes, 'decimalPlaces', 2);

    this.step = decimalPlaces > 0 ? `0${'.'.padEnd(decimalPlaces, '0')}1` : '0';
  }

  onChange(event: Event) {
    const value = (event?.target as HTMLInputElement)?.valueAsNumber;

    this._renderProps?.onUpdateBindingArrayAndExecuteEvent(
      [
        {
          key: 'value',
          value: value,
        },
      ],
      {
        name: 'OnChange',
        parameters: [value],
      },
    );
  }
}

export default InputDecimal;
