import { ExternalElementNodePropsType } from 'omnia-component-framework';

class TableCellElement extends HTMLTableCellElement {
  constructor() {
    super();
  }
  setRenderProps(renderProps: ExternalElementNodePropsType) {
    this.removeAttribute('style');
    this.className = renderProps.className;
    Object.assign(this.style, renderProps.style);
    if (renderProps.attributes && 'colspan' in renderProps.attributes) this.colSpan = renderProps.attributes['colspan'];
  }
}

export default TableCellElement;
