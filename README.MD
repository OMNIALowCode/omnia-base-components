# OMNIA Component Library Sample Project

# Introduction

This project contains a set of components to be used on OMNIA Platform models.

This repository can be cloned, and new components can be developed.

# Available Components:

- [Button](/src/components/Button)
- [FileUpload](/src/components/FileUpload)
- [Icon](/src/components/Icon)
- [Image](/src/components/Image)
- Inputs
  - [Input](/src/components/Input/Input)
  - [InputBoolean](/src/components/Input/InputBoolean)
  - [InputDate](/src/components/Input/InputDate)
  - [InputDecimal](/src/components/Input/InputDecimal/)
  - [InputInteger](/src/components/Input/InputInteger/)
  - [InputPassword](/src/components/Input/InputPassword/)
  - [InputTextArea](/src/components/Input/InputTextArea/)
- [Link](/src/components/Link/)
- [Panel](/src/components/Panel/)
- [Select](/src/components/Select/)
- Table
  - [TableBody](/src/components/Table/TableBody/)
  - [TableCell](/src/components/Table/TableCell/)
  - [TableFoot](/src/components/Table/TableFoot/)
  - [TableHead](/src/components/Table/TableHead/)
  - [TableHeadCell](/src/components/Table/TableHeadCell/)
  - [TableRow](/src/components/Table/TableRow/)
- [Text](/src/components/Text/)

# Toolbox

The toolbox contains all entries available when importing the Components package.

A toolbox entry is not a component, but can be the result of a composition of multiple components.

By default the following entries are available:

- lookUp

This entry purpose is to ease the creation of a UI attribute that allows the introduction of values for a reference attribute.

It renders a label, a text input along with a button that works as a look up for a given entity data, and a errors area. When the button is clicked it shows a modal with a list of entries for that entity type, and allows the selection of one.

- entityForm attribute

This entry has the goal to ease the creation of a UI element to be mapped to a entity attribute.

It renders a label, a text input, and a errors area.

- basic Card

This entry renders a panel with a set of labels, icons and buttons.

It should be used to render information to the end user, and grant the user the possibility of taking a modelable action when clicking the button.

- image Card

Similar to the basic Card, but it adds a Image component.

- tile

Similar to the basic Card, but the Button component is not present.

- pagination

This entry renders a panel with a set of buttons and texts, with the purpose of rendering pagination controls.

# Pre-requisites:

- yarn (npm install -g yarn)

# Install dependencies:

- yarn

# Build:

- yarn build

# Pack:

- yarn pack
