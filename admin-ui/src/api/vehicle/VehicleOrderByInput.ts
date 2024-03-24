import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  color?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ownerName?: SortOrder;
  regNo?: SortOrder;
  updatedAt?: SortOrder;
};
