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
    deleteComment(id: ID) : Comment
  }

  type Subscription {
    commentAdded : Comment
    commentDeleted : Comment
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;