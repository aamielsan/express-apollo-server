import { Express } from 'express';
import expressLoader from './express.loader';
import graphqlLoader from './graphql.loader';
import databaseLoader from './database.loader';
import routeLoader from './route.loader';
import errorLoader from './error.loader';
import logger from '../utils/logger';

async function load({ app }: { app: Express }) {
  try {
    expressLoader({ app });
    await databaseLoader();
    await graphqlLoader({ app });
    routeLoader({ app });
    errorLoader({ app });
  } catch (e) {
    logger.error(e);
    throw e;
  }
}

export default load;
