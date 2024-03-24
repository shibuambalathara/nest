import { JsonValue } from "type-fest";
import { Vehicle } from "../vehicle/Vehicle";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  vehicles?: Array<Vehicle>;
};
