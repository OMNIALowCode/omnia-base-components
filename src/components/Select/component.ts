import { ExternalElementNodePropsType } from 'omnia-component-framework';
import { getAttributeValue, getReadOnly, getValue } from '../helpers';

type SelectOptionType = {
  label: string;
  key: string;
};

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
    const attributeOptions: (SelectOptionType | string)[] = getAttributeValue(renderProps.attributes, 'options', []);

    if (Array.isArray(attributeOptions))
      attributeOptions.forEach(option =>
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

  onUpdate(event: Event) {
    const value = (event?.target as HTMLSelectElement)?.value;
    this._renderProps?.onUpdateBindingArrayAndExecuteEvent(
      [
        {
          key: 'value',
          value: value,
        },
      ],
      {
        name: 'OnSelect',
        parameters: [value],
      },
    );
  }
}

export default Select;
