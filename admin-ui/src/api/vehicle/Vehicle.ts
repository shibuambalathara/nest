import { User } from "../user/User";

export type Vehicle = {
  color: string | null;
  createdAt: Date;
  id: string;
  owner?: User | null;
  regNo: string | null;
  updatedAt: Date;
};
