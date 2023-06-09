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
              value: 'return [10, 20, 50, 100];',
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
  name: 'basic Card',
  icon: 'square-o',
  element: {
    name: 'Card',
    type: ComponentTypes.PANEL,
    elements: [
      {
        name: 'CardHeader',
        type: ComponentTypes.PANEL,
        elements: [
          {
            name: 'CardHeaderLeft',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'CardHeaderText',
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
            name: 'CardHeaderRight',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'CardHeaderIcon',
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
          value: 'row omniabasecomponent-card-header  omniabasecomponent-card-header-text',
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
          value: 'omniabasecomponent-card-container',
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
                name: 'Button_Icon',
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
                name: 'Button_Text',
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
            groupElements: false,
          },
        ],
        attributes: [],
        behaviours: [],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'omniabasecomponent-card-footer d-flex justify-content-end',
        },
        groupElements: false,
      },
    ],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'omniabasecomponent-card col-4 mr-3',
    },
    groupElements: false,
  },
};

const imageCardRecipe: ToolBoxEntry = {
  name: 'image Card',
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
          value: 'omniabasecomponent-card-image',
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
          value: 'omniabasecomponent-card-container',
        },
        groupElements: false,
      },
      {
        name: 'carfooterbutton',
        type: ComponentTypes.BUTTON,
        elements: [
          {
            name: 'Button_Icon',
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
            name: 'Button_Text',
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
        behaviours: [
          {
            name: 'OnClick',
            expression: '//',
          },
        ],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'omniabasecomponent-card-footer-button btn btn-primary',
        },
        groupElements: false,
      },
    ],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'omniabasecomponent-card col-3 ml-3 mb-3 p-0',
    },
    groupElements: false,
  },
};

const tileRecipe: ToolBoxEntry = {
  name: 'Tile',
  icon: 'window-close-o',
  element: {
    name: 'Card',
    type: ComponentTypes.PANEL,
    elements: [
      {
        name: 'CardHeader',
        type: ComponentTypes.PANEL,
        elements: [
          {
            name: 'CardHeaderLeft',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'CardHeaderText',
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
            name: 'CardHeaderRight',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'CardHeaderIcon',
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
          value: 'row omniabasecomponent-card-header omniabasecomponent-card-header-text',
        },
        groupElements: false,
      },
      {
        name: 'cardContainer',
        type: ComponentTypes.PANEL,
        elements: [
          {
            name: 'ContainerNumber',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'ContainerNumberText',
                type: ComponentTypes.TEXT,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value: '25',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
                cssStyle: {
                  source: ToolBoxEntryAttributeValueSource.Direct,
                  value: 'color:#2196f3;\r\n',
                },
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
            classesStyles: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'row justify-content-md-center m-0',
            },
            groupElements: false,
          },
          {
            name: 'ContainerMessage',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'ContainerMessageText',
                type: ComponentTypes.TEXT,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value: 'Due Tasks',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
                cssStyle: {
                  source: ToolBoxEntryAttributeValueSource.Direct,
                  value: 'color:#2196f3;',
                },
                behaviours: [],
                groupElements: false,
              },
            ],
            attributes: [],
            behaviours: [],
            classesStyles: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'row justify-content-md-center m-0',
            },
            groupElements: false,
          },
        ],
        attributes: [],
        behaviours: [],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'omniabasecomponent-card-container',
        },
        groupElements: false,
      },
      {
        name: 'cardFooter',
        type: ComponentTypes.PANEL,
        elements: [
          {
            name: 'Panel1',
            type: ComponentTypes.PANEL,
            elements: [
              {
                name: 'Text2',
                type: ComponentTypes.TEXT,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value: 'Completed:',
                      source: ToolBoxEntryAttributeValueSource.Direct,
                    },
                  },
                ],
                behaviours: [],
                classesStyles: {
                  source: ToolBoxEntryAttributeValueSource.Direct,
                  value: 'mr-2',
                },
                groupElements: false,
              },
              {
                name: 'Text3',
                type: ComponentTypes.TEXT,
                elements: [],
                attributes: [
                  {
                    key: 'value',
                    value: {
                      value: '7',
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
            classesStyles: {
              source: ToolBoxEntryAttributeValueSource.Direct,
              value: 'row justify-content-md-center m-0',
            },
            groupElements: false,
          },
        ],
        attributes: [],
        behaviours: [],
        classesStyles: {
          source: ToolBoxEntryAttributeValueSource.Direct,
          value: 'omniabasecomponent-card-footer',
        },
        groupElements: false,
      },
    ],
    attributes: [],
    behaviours: [],
    classesStyles: {
      source: ToolBoxEntryAttributeValueSource.Direct,
      value: 'omniabasecomponent-card col-3 mr-3',
    },
    groupElements: false,
  },
};

export const ToolBoxEntries: ToolBoxEntry[] = [basicCardRecipe, imageCardRecipe, tileRecipe, paginationRecipe];
