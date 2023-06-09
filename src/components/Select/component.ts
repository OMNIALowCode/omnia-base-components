import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getAttributeValue, getReadOnly, getValue } from '../helpers';

class Select extends HTMLSelectElement {
  private _renderProps?: ExternalElementNodePropsType;
  constructor() {
    super();
    this.onchange = this.onUpdate.bind(this);
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    this.innerHTML = '';
    const attributeOptions: any[] = getAttributeValue(renderProps.attributes, 'options', []);

    if (Array.isArray(attributeOptions))
      attributeOptions.forEach((option: any) =>
        this.options.add(
          typeof option === 'object' && option !== null
            ? new Option(option?.label, option?.key)
            : new Option(option, option),
        ),
      );

    this.value = getValue(renderProps.attributes);
    this._renderProps = renderProps;
    this.disabled = getReadOnly(renderProps.attributes);
  }

  onUpdate(event) {
    this._renderProps?.onUpdateBindingArrayAndExecuteEvent(
      [
        {
          key: 'value',
          value: event.target.value,
        },
      ],
      {
        name: 'OnSelect',
        parameters: [event.target.value],
      },
    );
  }
}

export default Select;
