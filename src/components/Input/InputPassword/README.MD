# Password Input Component Documentation

# Description

Component that renders a password input, for users to introduce protected strings.

When used in the context of an entity form, this component is usually bound to a model attribute.

The inserted values are not encrypted. If a encryption is intended, it must be implemented on the entity save behaviours.

# Attributes

| Attribute | Description                                                                                                    |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| value     | The value shown in the input. Since the password is a protected value, the characters will be replaced by dots |
| readOnly  | Boolean to indicate if the rendered element is read only.                                                      |

# Events

| Event    | Description                                                |
| -------- | ---------------------------------------------------------- |
| OnChange | This event is triggered when the password value is changed |
