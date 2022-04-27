import { callTypes, callResolvers } from "./call.mjs";
import { userTypes, userResolvers } from "./user.mjs";
import { addressTypes, addressResolvers } from "./address.mjs";
import { adminTypes, adminResolvers } from "./admin.mjs";
import { logTypes, logResolvers } from "./log.mjs";
import { departmentTypes, departmentResolvers } from "./department.mjs";

const typeDefs = [callTypes, userTypes, addressTypes, adminTypes, logTypes, departmentTypes];
const resolvers = Object.assign({
  Query: Object.assign(
    {},
    callResolvers.Query,
    userResolvers.Query,
    addressResolvers.Query,
    adminResolvers.Query,
    logResolvers.Query,
    departmentResolvers.Query,
  ),
  Mutation: Object.assign(
    {},
    callResolvers.Mutation,
    userResolvers.Mutation,
    addressResolvers.Mutation,
    adminResolvers.Mutation,
    logResolvers.Mutation,
    departmentResolvers.Mutation,
  ),
});

export { typeDefs, resolvers };
