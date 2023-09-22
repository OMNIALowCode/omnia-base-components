import { ToolBoxEntry, ToolBoxEntryAttributeValueSource } from 'omnia-component-framework';
import ComponentTypes from './components/all-types';

const paginationRecipe: ToolBoxEntry = {
  name: 'pagination',
  icon: 'arrows-h',
  element: {
    name: 'PaginationPanel',
    type: ComponentTypes.PANEL,
    groupElements: true,
    elements: [
      {
        name: 'btnPaginationFirst',
        type: ComponentTypes.BUTTON,
        elements: [
          {
            name: 'btnPaginationFirstIcon',
            type: ComponentTypes.ICON,
            elements: [],
            attributes: [
              {
                key: 'value',
                value: {
                  value: 'step-backward',
                  source: ToolBoxEntryAttributeValueSource.Direct,
                },
              },
            ],
            groupElements: false,
            behaviours: [],
          },
        ],
        attributes: [
          {
            key: 'disabled',
            value: {
              value: false,
              source: ToolBoxEntryAttributeValueSource.Direct,
            },
          },
        ],
        groupElements: true,
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
      {
        name: 'btnPaginationPreview',
        type: ComponentTypes.BUTTON,
        elements: [
          {
            name: 'btnPaginationPreviewIcon',
            type: ComponentTypes.ICON,
            elements: [],
            attributes: [
              {
                key: 'value',
                value: {
                  value: 'chevron-left',
                  source: ToolBoxEntryAttributeValueSource.Direct,
                },
              },
            ],
            groupElements: false,
            behaviours: [],
          },
        ],
        attributes: [
          {
            key: 'disabled',
            value: {
              value: false,
              source: ToolBoxEntryAttributeValueSource.Direct,
            },
          },
        ],
        groupElements: true,
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
      {
        name: 'paginationLabel1',
        type: ComponentTypes.TEXT,
        elements: [],
        attributes: [
          {
            key: 'value',
            value: {
              value: '#',
              source: ToolBoxEntryAttributeValueSource.Direct,
            },
          },
        ],
        groupElements: false,
        cssStyle: {
          value: 'padding-top:7px;\r\nborder-right-style:none;',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
      {
        name: 'paginationLabel2',
        type: ComponentTypes.TEXT,
        elements: [],
        attributes: [
          {
            key: 'value',
            value: {
              value: 'of',
              source: ToolBoxEntryAttributeValueSource.Direct,
            },
          },
        ],
        groupElements: false,
        cssStyle: {
          value: 'padding-top:7px;\r\nborder-right-style:none;\r\nborder-left-style:none;',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
      {
        name: 'paginationLabel3',
        type: ComponentTypes.TEXT,
        elements: [],
        attributes: [
          {
            key: 'value',
            value: {
              value: '##',
              source: ToolBoxEntryAttributeValueSource.Direct,
            },
          },
        ],
        groupElements: false,
        cssStyle: {
          value: 'padding-top:7px;\r\nborder-right-style:none;\r\nborder-left-style:none;',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
      {
        name: 'btnPaginationNext',
        type: ComponentTypes.BUTTON,
        elements: [
          {
            name: 'btnPaginationNextIcon',
            type: ComponentTypes.ICON,
            elements: [],
            attributes: [
              {
                key: 'value',
                value: {
                  value: 'chevron-right',
                  source: ToolBoxEntryAttributeValueSource.Direct,
                },
              },
            ],
            behaviours: [],
            groupElements: false,
          },
        ],
        attributes: [],
        groupElements: true,
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
      {
        name: 'btnPaginationLast',
        type: ComponentTypes.BUTTON,
        elements: [
          {
            name: 'btnPaginationLastIcon',
            type: ComponentTypes.ICON,
            elements: [],
            attributes: [
              {
                key: 'value',
                value: {
                  value: 'step-forward',
                  source: ToolBoxEntryAttributeValueSource.Direct,
                },
              },
            ],
            groupElements: false,
            behaviours: [],
          },
        ],
        attributes: [],
        groupElements: true,
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
      {
        name: 'cbPaginationRefresh',
        type: ComponentTypes.BUTTON,
        elements: [
          {
            name: 'cbPaginationRefreshIcon',
            type: ComponentTypes.ICON,
            elements: [],
            attributes: [
              {
                key: 'value',
                value: {
                  value: 'refresh',
                  source: ToolBoxEntryAttributeValueSource.Direct,
                },
              },
            ],
            groupElements: false,
            behaviours: [],
          },
        ],
        attributes: [],
        groupElements: true,
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
      {
        name: 'cbPaginationPageSize',
        type: ComponentTypes.SELECT,
        elements: [],
        attributes: [
          {
            key: 'options',
            value: {
              value:
                '    return [\r\n        { key: 10, label: 10 },\r\n        { key: 25, label: 25 },\r\n        { key: 50, label: 50 },\r\n        { key: 100, label: 100 }\r\n    ]',
              source: ToolBoxEntryAttributeValueSource.Expression,
            },
          },
        ],
        groupElements: false,
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
      {
        name: 'lkPaginationAddNew',
        type: ComponentTypes.LINK,
        elements: [
          {
            name: 'lkPaginationAddNewIcon',
            type: ComponentTypes.ICON,
            elements: [],
            attributes: [
              {
                key: 'value',
                value: {
                  value: 'plus',
                  source: ToolBoxEntryAttributeValueSource.Direct,
                },
              },
            ],
            groupElements: false,
            behaviours: [],
          },
        ],
        attributes: [],
        groupElements: false,
        cssStyle: {
          value: 'padding-top:7px;',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
        behaviours: [],
        classesStyles: {
          value: 'page-link',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
      },
    ],
    attributes: [],
    behaviours: [],
    classesStyles: {
      value: 'pagination pagination-sm float-right',
      source: ToolBoxEntryAttributeValueSource.Direct,
    },
  },
};

const basicCardRecipe: ToolBoxEntry = {
  name: 'basic card',
  icon: 'square-o',
  element: {
    name: 'card',
    type: ComponentTypes.PANEL,
    groupElements: true,
    elements: [
      {
        name: 'cardHeader',
        type: ComponentTypes.PANEL,
        elements: [
          {
            name: 'cardHeaderLeft',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'cardHeaderText',
                type: ComponentTypes.TEXT,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value: 'Title',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
                behaviours: [],
                groupElements: false,
              },
            ],
            attributes: [],
            behaviours: [],
            classesStyles: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'col-6',
            },
            groupElements: false,
          },
          {
            name: 'cardHeaderRight',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'cardHeaderIcon',
                type: ComponentTypes.ICON,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value: 'font-awesome',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
                behaviours: [],
                groupElements: false,
              },
            ],
            attributes: [],
            behaviours: [],
            classesStyles: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'col-6 d-flex justify-content-end',
            },
            groupElements: false,
          },
        ],
        attributes: [],
        behaviours: [],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'card-header row m-0',
        },
        groupElements: false,
      },
      {
        name: 'cardContainer',
        type: ComponentTypes.PANEL,
        elements: [
          {
            name: 'cardContainerDescription',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'cardContainerDescriptionText',
                type: ComponentTypes.TEXT,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value:
                        'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. ',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
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
          value: 'card-body',
        },
        groupElements: false,
      },
      {
        name: 'cardFooter',
        type: ComponentTypes.PANEL,
        elements: [
          {
            name: 'cardFooterButton',
            type: ComponentTypes.BUTTON,
            elements: [
              {
                name: 'buttonIcon',
                type: ComponentTypes.ICON,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value: 'font-awesome',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
                behaviours: [],
                classesStyles: {
                  source: ToolBoxEntryAttributeValueSource.Direct,
                  value: 'pt-1',
                },
                groupElements: false,
              },
              {
                name: 'buttonText',
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
              },
            ],
            attributes: [],
            behaviours: [],
            classesStyles: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'd-inline-flex btn btn-primary',
            },
            groupElements: true,
          },
        ],
        attributes: [],
        behaviours: [],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'card-footer text-right',
        },
        groupElements: false,
      },
    ],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'card col-3 ml-3 mb-3 p-0',
    },
  },
};

const imageCardRecipe: ToolBoxEntry = {
  name: 'image card',
  icon: 'address-card-o',
  element: {
    name: 'card',
    type: ComponentTypes.PANEL,
    elements: [
      {
        name: 'cardImage',
        type: 'Image',
        elements: [],
        attributes: [],
        behaviours: [],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'card-img-top',
        },
        cssStyle: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value:
            '    border-top-left-radius: 25px;\r\n    border-top-right-radius: 25px;\r\n    border-bottom-left-radius: 0px !important;\r\n    border-bottom-right-radius: 0px !important;',
        },
        groupElements: false,
      },
      {
        name: 'cardContainer',
        type: ComponentTypes.PANEL,
        elements: [
          {
            name: 'cardContainerTitle',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'cardContainerTitleText',
                type: ComponentTypes.TEXT,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value: 'Title',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
                behaviours: [],
                classesStyles: {
                  source: ToolBoxEntryAttributeValueSource.Direct,
                  value: 'font-weight-bold',
                },
                groupElements: false,
              },
            ],
            attributes: [],
            behaviours: [],
            groupElements: false,
          },
          {
            name: 'cardContainerDescription',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'cardContainerDescriptionText',
                type: ComponentTypes.TEXT,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value:
                        'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. ',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
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
          value: 'card-body',
        },
        groupElements: false,
      },
      {
        name: 'cardfooter',
        type: ComponentTypes.PANEL,
        elements: [
          {
            name: 'cardfooterbutton',
            type: ComponentTypes.BUTTON,
            elements: [
              {
                name: 'buttonIcon',
                type: ComponentTypes.ICON,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value: 'font-awesome',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
                behaviours: [],
                classesStyles: {
                  source: ToolBoxEntryAttributeValueSource.Direct,
                  value: 'pt-1',
                },
                groupElements: false,
              },
              {
                name: 'buttonText',
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
              },
            ],
            attributes: [],
            behaviours: [],
            classesStyles: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'w-100 btn btn-primary',
            },
            cssStyle: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value:
                '    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    border-top-left-radius: 0px !important;\r\n    border-top-right-radius: 0px !important;',
            },
            groupElements: true,
          },
        ],
        attributes: [],
        behaviours: [],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'card-footer row justify-content-md-center m-0 p-0',
        },
        cssStyle: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value:
            '    border-bottom-left-radius: 25px;\r\n    border-bottom-right-radius: 25px;\r\n    border-top-left-radius: 0px !important;\r\n    border-top-right-radius: 0px !important;',
        },
        groupElements: false,
      },
    ],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'card col-3 ml-3 mb-3 p-0',
    },
    cssStyle: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: '    border-radius: 25px;\r\n    border: 0px;',
    },
    groupElements: true,
  },
};

const entityFormAttributeRecipe: ToolBoxEntry = {
  name: 'entityForm attribute',
  icon: 'terminal',
  element: {
    name: 'attributePanel',
    type: 'Panel',
    elements: [
      {
        name: 'attributeLabel',
        type: 'Text',
        elements: [],
        attributes: [
          {
            key: 'value',
            value: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'Name',
            },
          },
        ],
        behaviours: [],
        groupElements: false,
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'mb-2',
        },
      },
      {
        name: 'attributeOptionallabel',
        type: 'Text',
        elements: [],
        attributes: [
          {
            key: 'value',
            value: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: '(optional)',
            },
          },
        ],
        behaviours: [],
        groupElements: false,
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'ml-1',
        },
        cssStyle: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: '    color: #b4b4b4;\n    font-size: 0.75rem;',
        },
      },
      {
        name: 'attributeInput',
        type: 'Input',
        elements: [],
        attributes: [],
        behaviours: [],
        groupElements: false,
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'form-field-text form-control',
        },
      },
      {
        name: 'attributeErrorForEach',
        type: '_foreach',
        elements: [
          {
            name: 'attributeErrorText',
            type: 'Text',
            elements: [],
            attributes: [
              {
                key: 'value',
                value: {
                  source: ToolBoxEntryAttributeValueSource.Expression,
                  value: '    return currentElement',
                },
              },
            ],
            behaviours: [],
            groupElements: false,
            classesStyles: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'text-danger',
            },
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
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'col-md-6 mb-2',
    },
  },
};

const lookUpRecipe: ToolBoxEntry = {
  name: 'lookUp',
  icon: 'search',
  element: {
    name: 'lookUpPanel',
    type: 'Panel',
    elements: [
      {
        name: 'lookUpInputPanel',
        type: 'Panel',
        elements: [
          {
            name: 'lookUpButtonPanel',
            type: 'Panel',
            elements: [
              {
                name: 'lookUpButton',
                type: 'Button',
                elements: [
                  {
                    name: 'lookUpButtonIcon',
                    type: 'Icon',
                    elements: [],
                    attributes: [
                      {
                        key: 'value',
                        value: {
                          value: 'search',
                          source: ToolBoxEntryAttributeValueSource.Direct,
                        },
                      },
                    ],
                    behaviours: [],
                    classesStyles: {
                      source: ToolBoxEntryAttributeValueSource.Direct,
                      value: 'w-100 pt-1',
                    },
                    groupElements: false,
                  },
                ],
                attributes: [],
                cssStyle: {
                  value: '    border-color: #ced4da;',
                  source: ToolBoxEntryAttributeValueSource.Direct,
                },
                behaviours: [
                  {
                    name: 'OnClick',
                    expression:
                      '     /* context.uiTools.openModal({\r\n        type: "list",\r\n        name: "XXXXXX",\r\n        onClose: (result, args) => {\r\n            if (result == \'Selected\')\r\n                currentElement.value = args._code;\r\n        },\r\n    }); */',
                  },
                ],
                classesStyles: {
                  value: 'btn btn-outline-secondary',
                  source: ToolBoxEntryAttributeValueSource.Direct,
                },
                groupElements: true,
              },
            ],
            attributes: [],
            behaviours: [],
            classesStyles: {
              value: 'input-group-prepend',
              source: ToolBoxEntryAttributeValueSource.Direct,
            },
            groupElements: false,
          },
          {
            name: 'lookUpInput',
            type: 'Input',
            elements: [],
            attributes: [],
            behaviours: [],
            classesStyles: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'form-field-text form-control',
            },
            groupElements: false,
          },
        ],
        attributes: [],
        behaviours: [],
        classesStyles: {
          value: 'input-group',
          source: ToolBoxEntryAttributeValueSource.Direct,
        },
        groupElements: false,
      },
    ],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'input-group',
    },
    groupElements: true,
  },
};

export const ToolBoxEntries: ToolBoxEntry[] = [
  lookUpRecipe,
  entityFormAttributeRecipe,
  basicCardRecipe,
  imageCardRecipe,
  paginationRecipe,
];
