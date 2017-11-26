import {
  makeExecutableSchema,
} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Comment {
    id: ID!
    content: String
  }

  type Query {
    comments: [Comment]
  }

  type Mutation {
    addComment(content: String!) : Comment
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;