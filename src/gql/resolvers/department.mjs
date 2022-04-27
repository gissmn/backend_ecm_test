import { gql } from "apollo-server-core";

const departmentTypes = gql`
  type Department {
    _id: ID
    name: String
  }
  type Query {
    getDepartments: [Department]
  }
  type Mutation {
    createDepartment(name: String): Department
  }
`;
const departmentResolvers = {
  Query: {},
  Mutation: {},
};

export { departmentTypes, departmentResolvers };
