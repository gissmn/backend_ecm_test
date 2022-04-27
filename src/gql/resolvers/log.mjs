import { gql } from "apollo-server-core";

const logTypes = gql`
  type Log {
    _id: ID
    type: String
    userID: ID
    desc: String
    callId: ID
  }
  type Query {
    getLogs: [Log]
  }
  type Mutation {
    createLog(type: String, desc: String, userID: ID): Log
  }
`;
const logResolvers = {
  Query: {},
  Mutation: {},
};

export { logTypes, logResolvers };
