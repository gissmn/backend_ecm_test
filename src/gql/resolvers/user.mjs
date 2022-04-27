import { gql } from "apollo-server-core";
import getUsers from "../query/getUsers.mjs";
import createUser from "../mutation/createUser.mjs";

const userTypes = gql`
  type User {
    _id: ID
    email: String
    firstName: String
    phone: String
    lastName: String
    userNum: Int
    addressId: ID
    password: String
  }
  type Query {
    getUsers: [User]
  }
  type Mutation {
    createUser(email: String, firstName: String, phone: String, lastName: String, userNum: Int, addressId: ID, password: String): User
  }
`;
const userResolvers = {
  Query: {
    getUsers,
  },
  Mutation: {
    createUser,
  },
};

export { userResolvers, userTypes };
