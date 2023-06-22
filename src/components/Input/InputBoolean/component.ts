import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getReadOnly, getValue } from '../../helpers';

class InputBoolean extends HTMLInputElement {
  private _renderProps?: ExternalElementNodePropsType;

  constructor() {
    super();
    this.type = 'checkbox';
    this.onchange = this.onChange.bind(this);
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    this._renderProps = renderProps;

    this.checked = getValue(renderProps.attributes);
    this.disabled = getReadOnly(renderProps.attributes);
  }

  onChange(e) {
    this._renderProps?.onUpdateBindingArrayAndExecuteEvent(
      [
        {
          key: 'value',
          value: e.target.checked,
        },
      ],
      {
        name: 'OnChange',
        parameters: [e.target.checked],
      },
    );
  }
}

export default InputBoolean;
