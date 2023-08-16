# Select Component Documentation

# Description

Component that renders a SelectBox, for users to select a value from a limited number of choices.

When used in the context of an entity form, this component is usually bound to a model attribute. The values can be obtained from a previously modeled Enumeration, using OMNIA base component Selector as the data source.

# Attributes

| Attribute | Description                                                   |
| --------- | ------------------------------------------------------------- |
| options   | The list of [options](#selectoption) available to be selected |
| value     | A string that represents the selected value.                  |
| readOnly  | Boolean to indicate if the rendered element is read only.     |

# Events

| Event    | Description                                              |
| -------- | -------------------------------------------------------- |
| OnSelect | This event is triggered when a select option is selected |

# Types

## SelectOption

| Property | Description                    |
| -------- | ------------------------------ |
| key      | The key of the select option   |
| label    | The label of the select option |
