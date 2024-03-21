import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const VehicleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <ReferenceInput source="owner.id" reference="User" label="owner">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="regNo" source="regNo" />
      </SimpleForm>
    </Edit>
  );
};
