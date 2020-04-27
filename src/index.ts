import 'reflect-metadata';
import startServer from './server';
import getConfig from './config';

const { port } = getConfig();

startServer(port);
