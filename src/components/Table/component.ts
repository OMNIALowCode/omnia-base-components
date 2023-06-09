import { ExternalElementNodePropsType } from 'omnia-component-framework';

class Table extends HTMLTableElement {
  constructor() {
    super();
  }
  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
  }
}

export default Table;
