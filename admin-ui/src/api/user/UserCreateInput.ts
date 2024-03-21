import { InputJsonValue } from "../../types";
import { VehicleCreateNestedManyWithoutUsersInput } from "./VehicleCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  vehicles?: VehicleCreateNestedManyWithoutUsersInput;
};
