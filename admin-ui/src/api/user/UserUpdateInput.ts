import { InputJsonValue } from "../../types";
import { VehicleUpdateManyWithoutUsersInput } from "./VehicleUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  vehicles?: VehicleUpdateManyWithoutUsersInput;
};
