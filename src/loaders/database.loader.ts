import { Container } from 'typedi';
import { useContainer, createConnection, Connection, getConnectionOptions } from 'typeorm';
import getConfig from '../config';

useContainer(Container);

async function databaseLoader(): Promise<Connection> {
  const config = await getConnectionOptions() || {};
  const { typeorm } = getConfig();
  return createConnection({
    ...config,
    ...typeorm,
  });
}

export default databaseLoader;

