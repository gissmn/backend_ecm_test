import { gql } from "apollo-server-core";
import getLogs from "../query/getLogs.mjs";
import cancelCall from "../mutation/cancelCall.mjs";
const logTypes = gql`
  type Log {
    _id: ID
    type: String
    adminId: ID
    desc: String
    callId: ID
  }
  type Query {
    getLogs(callId: ID): [Log]
  }
  type Mutation {
    createLog(type: String, desc: String, adminId: ID): Log
    cancelCall(callId: ID, desc: String): Call
  }
`;
const logResolvers = {
  Query: { getLogs },
  Mutation: { cancelCall },
};

export { logTypes, logResolvers };
