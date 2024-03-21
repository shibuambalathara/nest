import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VehicleUpdateInput = {
  color?: string | null;
  owner?: UserWhereUniqueInput | null;
  regNo?: string | null;
};
