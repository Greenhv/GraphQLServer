import _ from './env';
import express from 'express';
import {
  graphqlExpress,
  graphiqlExpress,
} from 'apollo-server-express';
import cors from 'cors';
import bodyParser from 'body-parser';
import schema from './schema';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use('*', cors({ origin: 'http://0.0.0.0:3000' }));

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);