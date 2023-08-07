# Select Component Documentation

# Description

Component that renders a selectbox, for users to select a value from a limited number of choices.

When used in the context of an entity form, this component is usually bound to a model attribute. The values can be obtained from a model Enumeration, using a Selector component as the data source.

# Attributes

| Attribute | Description                                               |
| --------- | --------------------------------------------------------- |
| options   | The options available to be selected.                     |
| value     | The selected value.                                       |
| readOnly  | Boolean to indicate if the rendered element is read only. |

# Behaviours

| Behaviour | Description                                                                |
| --------- | -------------------------------------------------------------------------- |
| OnSelect  | Javascript code expression to be executed when a select option is selected |
