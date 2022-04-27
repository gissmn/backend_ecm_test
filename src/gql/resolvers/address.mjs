import { gql } from "apollo-server-core";
import getAddress from "../query/getAddress.mjs";
import createAddress from "../mutation/createAddress.mjs";

const addressTypes = gql`
  type Address {
    _id: ID
    city: String
    district: String
    unit: String
    apartment: String
    number: String
    detail: String
  }
  type Query {
    getAddress: [Address]
  }
  type Mutation {
    createAddress(city: String, district: String, unit: String, apartment: String, number: String, detail: String): Address
  }
`;

const addressResolvers = {
  Query: { getAddress },
  Mutation: { createAddress },
};

export { addressTypes, addressResolvers };
