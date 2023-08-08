# File Upload Component Documentation

# Description

Component to upload and download files.

The component renders a button that, when clicked, opens a modal that allows the upload of a new file. It also allows the list and removal of previously uploaded files.

The component value must be bound to a text attribute.

# Attributes

| Attribute       | Description                                                                |
| --------------- | -------------------------------------------------------------------------- |
| value           | The identifiers of the uploaded files                                      |
| readOnly        | Boolean to indicate if the button is read only                             |
| multiple        | Boolean to indicate if the component allows the upload of multiple files   |
| accept          | The types of files accepted on this upload component                       |
| entity          | The OMNIA model entity where the files will be uploaded. Value is required |
| buttonLabel     | The label of the rendered button                                           |
| uploadLabel     | The label shown in the modal upload button                                 |
| noFilesLabel    | The label shown when there are no files uploaded                           |
| modalTitleLabel | The label shown as the modal title when uploading a file                   |
| modalCloseLabel | The label shown on the modal close button                                  |

# Behaviours

There are no Behaviours associated with this Component.
