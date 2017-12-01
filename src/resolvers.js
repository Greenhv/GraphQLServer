import { PubSub, withFilter } from 'graphql-subscriptions';
import Db from './db';

const pubSub = new PubSub();

const resolvers = {
  Query: {
    comments: (root, args) => Db.models.comment.findAll({ where: args }),
  },
  Mutation: {
    addComment: async (root, { content }) => {
      try {
        const newComment = await Db.models.comment.create({
          content,
          createdAt: Date.now(),
          updatedAt: Date.now(),
        });

        pubSub.publish('commentAdded', {
          commentAdded: newComment,
        });
  
        return newComment;
      } catch(e) {
        console.log(e.message);
      }
    },
    deleteComment: async(root, { id }) => {
      try {
        const comment = await Db.models.comments.findById(id);
        await comment.destroy();

        return true;
      } catch(e) {
        console.log(e.message);
      }
    }
  },
  Subscription: {
    commentAdded: {
      subscribe: () => pubSub.asyncIterator('commentAdded'),
    },
  }
};

export default resolvers;