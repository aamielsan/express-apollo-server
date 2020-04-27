import path from 'path';
import { Express } from 'express';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import logger from '../utils/logger';

async function graphqlLoader({ app }: { app: Express }) {
  try {
    const schema = await buildSchema({
      resolvers: [
        path.join(__dirname, '/../resolvers/**/*.resolver.{ts,js}')
      ],
    });

    const server = new ApolloServer({ schema });
    server.applyMiddleware({ app, path: '/graphql' });
  } catch (e) {
    logger.error(e);
    throw e;
  }
}

export default graphqlLoader;
