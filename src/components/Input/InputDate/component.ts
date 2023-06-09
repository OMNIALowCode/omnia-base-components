import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getReadOnly, getValue } from '../../helpers';

class InputDate extends HTMLInputElement {
  private _renderProps?: ExternalElementNodePropsType;

  constructor() {
    super();
    this.type = 'date';
    this.onblur = this.onLostFocus.bind(this);
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

  onLostFocus() {
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
