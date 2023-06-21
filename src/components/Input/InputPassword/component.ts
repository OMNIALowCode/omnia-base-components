import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getReadOnly, getValue } from '../../helpers';

class InputPassword extends HTMLInputElement {
  private _renderProps?: ExternalElementNodePropsType;

  constructor() {
    super();
    this.type = 'password';

    this.onchange = this.onChange.bind(this);
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    this._renderProps = renderProps;
    this.value = getValue(renderProps.attributes);
    this.readOnly = getReadOnly(renderProps.attributes);
  }

  onChange(event: Event) {
    const value = (event?.target as HTMLInputElement)?.value;

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

export default InputPassword;
