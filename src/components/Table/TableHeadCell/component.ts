import { ExternalElementNodePropsType } from 'omnia-component-framework';
import TableCellElement from '../TableCellElement';

class TableHeadCell extends TableCellElement {
  constructor() {
    super();
    this.onclick = this.onClick.bind(this);
  }

  setRenderProps(renderProps: ExternalElementNodePropsType) {
    if (renderProps.implementedEvents.includes('OnClick'))
      this.onClickEvent = () => renderProps?.onExecuteEvent('OnClick', []);
  }

  private onClickEvent?: () => void;
  onClick(e) {
    if (this.onClickEvent) {
      e.preventDefault();
      e.stopImmediatePropagation();
      this.onClickEvent();
    }
  }
}

export default TableHeadCell;
