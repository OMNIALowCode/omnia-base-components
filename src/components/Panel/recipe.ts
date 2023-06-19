import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from '../all-types';

const panelRecipe: ToolBoxEntry = {
  name: 'panel',
  icon: 'wpforms',
  element: {
    name: 'panel',
    type: ComponentTypes.PANEL,
    elements: [],
    attributes: [],
    behaviours: [],
    groupElements: false,
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'row',
    },
  },
};

const rightPanelRecipe: ToolBoxEntry = {
  name: 'right row',
  icon: 'align-right',
  element: {
    name: 'rightRow',
    type: ComponentTypes.PANEL,
    elements: [],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'row justify-content-md-end m-0',
    },
    groupElements: false,
  },
};

const centerPanelRecipe: ToolBoxEntry = {
  name: 'center row',
  icon: 'align-center',
  element: {
    name: 'centerRow',
    type: ComponentTypes.PANEL,
    elements: [],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'row justify-content-md-center m-0',
    },
    groupElements: false,
  },
};

const twoColumnsRecipe: ToolBoxEntry = {
  name: 'two columns',
  icon: 'columns',
  element: {
    name: 'twoRow',
    type: ComponentTypes.PANEL,
    elements: [
      {
        name: 'twoRowLeft',
        type: ComponentTypes.PANEL,
        elements: [],
        attributes: [],
        behaviours: [],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'col-6',
        },
        groupElements: false,
      },
      {
        name: 'twoRowRight',
        type: ComponentTypes.PANEL,
        elements: [],
        attributes: [],
        behaviours: [],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'col-6',
        },
        groupElements: false,
      },
    ],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'row justify-content-md-center',
    },
    groupElements: false,
  },
};

const spinnerRecipe: ToolBoxEntry = {
  name: 'spinner',
  icon: 'circle-o-notch',
  element: {
    name: 'spinner',
    type: ComponentTypes.PANEL,
    elements: [],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'spinner-border text-primary',
    },
    groupElements: false,
  },
};

const recipes: ToolBoxEntry[] = [panelRecipe, rightPanelRecipe, centerPanelRecipe, twoColumnsRecipe, spinnerRecipe];
export default recipes;
