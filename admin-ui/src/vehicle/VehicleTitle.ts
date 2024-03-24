import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "color";

export const VehicleTitle = (record: TVehicle): string => {
  return record.color?.toString() || String(record.id);
};
