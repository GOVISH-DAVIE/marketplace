import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const StoreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="location" source="location" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" type="email" />
        <TextInput label="ownerProfile" source="ownerProfile" />
      </SimpleForm>
    </Create>
  );
};
