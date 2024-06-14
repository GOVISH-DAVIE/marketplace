import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" type="email" />
        <TextInput label="ownerProfile" source="ownerProfile" />
      </SimpleForm>
    </Edit>
  );
};
