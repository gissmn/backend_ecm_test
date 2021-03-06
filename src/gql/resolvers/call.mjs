import { gql } from "apollo-server-core";
import getCalls from "../query/getCalls.mjs";
import registerCall from "../mutation/registerCall.mjs";
import getCallById from "../query/getCallById.mjs";
const callTypes = gql`
  scalar Date
  type Call {
    _id: ID
    callId: Int
    name: String
    detail: String
    type: String
    status: String
    device: String
    category: String
    price: Int
    dueDate: Date
    userId: ID
    operatorId: ID
  }
  type Query {
    getCalls(status: String): [Call]
    getCallById(_id: ID): Call
  }
  type Mutation {
    registerCall(name: String, detail: String, device: String, type: String, userId: ID, category: String, dueDate: Date, operatorId: ID): Call
  }
`;
const callResolvers = {
  Query: {
    getCalls,
    getCallById,
  },
  Mutation: {
    registerCall,
  },
};

export { callTypes, callResolvers };
