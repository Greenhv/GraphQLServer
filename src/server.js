import _ from './env';
import express from 'express';
import { createServer } from 'http';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import schema from './schema';

const PORT = process.env.PORT;
const HOST = process.env.HOST;
const WSPORT = process.env.WSPORT;

const app = express();

app.use('*', cors({ origin: 'http://localhost:3000' }));

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  subscriptionEndpoint: `ws://${HOST}:${PORT}/subscriptions`
}));

const ws = createServer(app);

ws.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);

  const subscriptionServer = new SubscriptionServer({
    execute,
    subscribe,
    schema
  }, {
    server: ws,
    path: '/subscriptions',
  });
  
  
});
