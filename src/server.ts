import express from 'express';
import load from './loaders';
import logger from './utils/logger';

export default async function startServer(port: number) {
  try {
    const app = express();

    // Initialize
    await load({ app });

    app.listen(port, () => {
      logger.info(`Listening in port: ${port}`);
    });
  } catch (e) {
    logger.error(e);
    process.exit(1);
  }
}

