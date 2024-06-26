/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Vehicle } from "./Vehicle";
import { VehicleCountArgs } from "./VehicleCountArgs";
import { VehicleFindManyArgs } from "./VehicleFindManyArgs";
import { VehicleFindUniqueArgs } from "./VehicleFindUniqueArgs";
import { CreateVehicleArgs } from "./CreateVehicleArgs";
import { UpdateVehicleArgs } from "./UpdateVehicleArgs";
import { DeleteVehicleArgs } from "./DeleteVehicleArgs";
import { User } from "../../user/base/User";
import { VehicleService } from "../vehicle.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Vehicle)
export class VehicleResolverBase {
  constructor(
    protected readonly service: VehicleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "any",
  })
  async _vehiclesMeta(
    @graphql.Args() args: VehicleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Vehicle])
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "any",
  })
  async vehicles(
    @graphql.Args() args: VehicleFindManyArgs
  ): Promise<Vehicle[]> {
    return this.service.vehicles(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Vehicle, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "read",
    possession: "own",
  })
  async vehicle(
    @graphql.Args() args: VehicleFindUniqueArgs
  ): Promise<Vehicle | null> {
    const result = await this.service.vehicle(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Vehicle)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "create",
    possession: "any",
  })
  async createVehicle(
    @graphql.Args() args: CreateVehicleArgs
  ): Promise<Vehicle> {
    return await this.service.createVehicle({
      ...args,
      data: {
        ...args.data,

        owner: args.data.owner
          ? {
              connect: args.data.owner,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Vehicle)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "update",
    possession: "any",
  })
  async updateVehicle(
    @graphql.Args() args: UpdateVehicleArgs
  ): Promise<Vehicle | null> {
    try {
      return await this.service.updateVehicle({
        ...args,
        data: {
          ...args.data,

          owner: args.data.owner
            ? {
                connect: args.data.owner,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Vehicle)
  @nestAccessControl.UseRoles({
    resource: "Vehicle",
    action: "delete",
    possession: "any",
  })
  async deleteVehicle(
    @graphql.Args() args: DeleteVehicleArgs
  ): Promise<Vehicle | null> {
    try {
      return await this.service.deleteVehicle(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "owner",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getOwner(@graphql.Parent() parent: Vehicle): Promise<User | null> {
    const result = await this.service.getOwner(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
