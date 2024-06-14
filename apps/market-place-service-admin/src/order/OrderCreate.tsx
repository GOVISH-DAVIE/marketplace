import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Buyer" source="buyer" />
        <DateTimeInput label="orderDate" source="orderDate" />
        <TextInput label="Seller" source="seller" />
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Create>
  );
};
