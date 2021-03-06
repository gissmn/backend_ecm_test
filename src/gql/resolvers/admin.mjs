import { gql } from "apollo-server-core";
import getAdmins from "../query/getAdmins.mjs";
import createAdmin from "../mutation/createAdmin.mjs";
import login from "../mutation/login.mjs";
const adminTypes = gql`
  type Admin {
    _id: ID
    email: String
    firstName: String
    lastName: String
    password: String
    phone: String
    role: String
    department: ID
  }
  extend type Query {
    getAdmins: [Admin]
  }
  extend type Mutation {
    login(email: String!, password: String!): String
    createAdmin(email: String, firstName: String, lastName: String, password: String, phone: String, role: String, department: ID): Admin
  }
`;
const adminResolvers = {
  Query: {
    getAdmins,
  },
  Mutation: {
    createAdmin,
    login,
  },
};

export { adminTypes, adminResolvers };
