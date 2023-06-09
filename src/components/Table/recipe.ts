import {
  InternalComponentTypes,
  ToolBoxEntry,
  ToolBoxEntryAttributeValueSource,
  ToolBoxEntryElement,
} from 'omnia-component-framework';
import ComponentTypes from '../all-types';

const textRecipe: ToolBoxEntryElement = {
  name: ComponentTypes.TEXT,
  type: ComponentTypes.TEXT,
  elements: [],
  attributes: [
    {
      key: 'value',
      value: {
        source: ToolBoxEntryAttributeValueSource.Direct,
        value: 'myText',
      },
    },
  ],
  behaviours: [],
  groupElements: false,
};

const inputRecipe: ToolBoxEntryElement = {
  name: 'Input',
  type: ComponentTypes.INPUT,
  elements: [],
  attributes: [
    {
      key: 'value',
      value: {
        source: ToolBoxEntryAttributeValueSource.Direct,
        value: 'input',
      },
    },
  ],
  behaviours: [],
  groupElements: false,
  classesStyles: {
    source: ToolBoxEntryAttributeValueSource.Direct,
    value: 'form-control border-0',
  },
};

const recipes: ToolBoxEntry[] = [
  {
    name: 'table',
    icon: 'table',
    element: {
      name: 'Table',
      type: ComponentTypes.TABLE,
      elements: [
        {
          name: 'TableHead',
          type: ComponentTypes.TABLE_HEAD,
          elements: [
            {
              name: 'TableHeadRow',
              type: ComponentTypes.TABLE_ROW,
              elements: [
                {
                  name: 'TableHeadCell',
                  type: ComponentTypes.TABLE_HEAD_CELL,
                  elements: [textRecipe],
                  attributes: [],
                  behaviours: [],
                  groupElements: false,
                },
                {
                  name: 'TableHeadCell1',
                  type: ComponentTypes.TABLE_HEAD_CELL,
                  elements: [textRecipe],
                  attributes: [],
                  behaviours: [],
                  groupElements: false,
                },
                {
                  name: 'TableHeadCell2',
                  type: ComponentTypes.TABLE_HEAD_CELL,
                  elements: [textRecipe],
                  attributes: [],
                  groupElements: false,
                  behaviours: [],
                },
              ],
              attributes: [],
              behaviours: [],
              groupElements: false,
            },
          ],
          attributes: [],
          behaviours: [],
          groupElements: false,
        },
        {
          name: 'TableBody',
          type: ComponentTypes.TABLE_BODY,
          elements: [
            {
              name: 'TableRowForEach',
              type: InternalComponentTypes._foreach,
              elements: [
                {
                  name: 'TableRow',
                  type: ComponentTypes.TABLE_ROW,
                  elements: [
                    {
                      name: 'TableBodyCell',
                      type: ComponentTypes.TABLE_CELL,
                      elements: [inputRecipe],
                      attributes: [],
                      groupElements: false,
                      behaviours: [],
                    },
                    {
                      name: 'TableBodyCell1',
                      type: ComponentTypes.TABLE_CELL,
                      elements: [inputRecipe],
                      attributes: [],
                      behaviours: [],
                      groupElements: false,
                    },
                    {
                      name: 'TableBodyCell2',
                      type: ComponentTypes.TABLE_CELL,
                      elements: [inputRecipe],
                      attributes: [],
                      behaviours: [],
                      groupElements: false,
                    },
                  ],
                  attributes: [],
                  behaviours: [],
                  groupElements: false,
                },
              ],
              attributes: [],
              behaviours: [],
              groupElements: false,
            },
          ],
          attributes: [],
          behaviours: [],
          groupElements: false,
        },
        {
          name: 'TableFoot',
          type: ComponentTypes.TABLE_FOOT,
          elements: [
            {
              name: 'TableFoot',
              type: ComponentTypes.TABLE_ROW,
              elements: [
                {
                  name: 'TableFootCell',
                  type: ComponentTypes.TABLE_CELL,
                  elements: [textRecipe],
                  attributes: [],
                  behaviours: [],
                  groupElements: false,
                },
                {
                  name: 'TableFootCell1',
                  type: ComponentTypes.TABLE_CELL,
                  elements: [textRecipe],
                  attributes: [],
                  behaviours: [],
                  groupElements: false,
                },
                {
                  name: 'TableFootCell2',
                  type: ComponentTypes.TABLE_CELL,
                  elements: [textRecipe],
                  attributes: [],
                  behaviours: [],
                  groupElements: false,
                },
              ],
              attributes: [],
              behaviours: [],
              groupElements: false,
            },
          ],
          attributes: [],
          behaviours: [],
          groupElements: false,
        },
      ],
      attributes: [],
      behaviours: [],
      classesStyles: {
        source: ToolBoxEntryAttributeValueSource.Direct,
        value: 'table',
      },
      groupElements: false,
    },
  },
];
export default recipes;
