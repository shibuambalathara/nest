/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Vehicle, // @ts-ignore
  User,
} from "@prisma/client";

export class VehicleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.VehicleCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleCountArgs>
  ): Promise<number> {
    return this.prisma.vehicle.count(args);
  }

  async vehicles<T extends Prisma.VehicleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleFindManyArgs>
  ): Promise<Vehicle[]> {
    return this.prisma.vehicle.findMany(args);
  }
  async vehicle<T extends Prisma.VehicleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleFindUniqueArgs>
  ): Promise<Vehicle | null> {
    return this.prisma.vehicle.findUnique(args);
  }
  async createVehicle<T extends Prisma.VehicleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleCreateArgs>
  ): Promise<Vehicle> {
    return this.prisma.vehicle.create<T>(args);
  }
  async updateVehicle<T extends Prisma.VehicleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleUpdateArgs>
  ): Promise<Vehicle> {
    return this.prisma.vehicle.update<T>(args);
  }
  async deleteVehicle<T extends Prisma.VehicleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.VehicleDeleteArgs>
  ): Promise<Vehicle> {
    return this.prisma.vehicle.delete(args);
  }

  async getOwner(parentId: string): Promise<User | null> {
    return this.prisma.vehicle
      .findUnique({
        where: { id: parentId },
      })
      .owner();
  }
}