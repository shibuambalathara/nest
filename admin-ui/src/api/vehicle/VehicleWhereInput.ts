import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VehicleWhereInput = {
  color?: StringNullableFilter;
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
  regNo?: StringNullableFilter;
};
