import Db from './db';

const resolvers = {
  Query: {
    comments: (root, args) => Db.models.comment.findAll({ where: args }),
  },
  Mutation: {
    addComment: (root, args) => (
      Db.models.comment.create({
        content: args.content,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      })
    ),
  },
};

export default resolvers;