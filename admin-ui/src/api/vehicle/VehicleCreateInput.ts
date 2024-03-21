import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VehicleCreateInput = {
  color?: string | null;
  owner?: UserWhereUniqueInput | null;
  regNo?: string | null;
};
