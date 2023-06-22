import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getReadOnly, getValue } from '../../helpers';

class InputDate extends HTMLInputElement {
  private _renderProps?: ExternalElementNodePropsType;
  private valueChange: boolean;

  constructor() {
    super();

    this.type = 'date';
    this.onblur = this.onLostFocus.bind(this);
    this.onfocus = this.onFocus.bind(this);
    this.onchange = this.onChange.bind(this);

    this.valueChange = false;
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.id = renderProps.elementName;
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    this._renderProps = renderProps;

    const date = getValue(renderProps.attributes);
    this.readOnly = getReadOnly(renderProps.attributes);
    this.valueAsDate = isNaN(date) ? null : date;
  }

  onFocus() {
    this.valueChange = false;
  }

  onChange() {
    this.valueChange = true;
  }

  onLostFocus() {
    if (this.valueChange)
      this._renderProps?.onUpdateBindingArrayAndExecuteEvent(
        [
          {
            key: 'value',
            value: this.valueAsDate,
          },
        ],
        {
          name: 'OnChange',
          parameters: [this.valueAsDate],
        },
      );
  }
}

export default InputDate;
