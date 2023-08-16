# Decimal Input Component Documentation

# Description

Component that renders a decimal input, for users to introduce numeric values with decimal part.

When used in the context of an entity form, this component is usually bound to a model attribute.

# Attributes

| Attribute     | Description                                               |
| ------------- | --------------------------------------------------------- |
| value         | The value shown in the input.                             |
| readOnly      | Boolean to indicate if the rendered element is read only. |
| decimalPlaces | The number of decimal places for this input.              |
| minimumValue  | The minimum decimal value for the input.                  |
| maximumValue  | The maximum decimal value for the input.                  |

# Events

| Event    | Description                                               |
| -------- | --------------------------------------------------------- |
| OnChange | This event is triggered when the decimal value is changed |
