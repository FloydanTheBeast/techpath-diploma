import { gql } from 'apollo-server';

export const typeDefs = gql`
  type User {
    email: String!
    password: String!
  }
`;
