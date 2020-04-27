import { Express, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';

function expressLoader({ app }: { app: Express }) {
  app.enable('trust proxy'); // Configure X-Forwarded headers

  app.use(morgan('combined'));
  app.use(cors({ origin: '*' }));
  app.use(helmet());
  app.use(bodyParser.json());

  // Health check endpoint
  app.get('/health', (_, res: Response) => {
    res.sendStatus(204);
  });

  app.head('/health', (_, res: Response) => {
    res.sendStatus(204);
  });
}

export default expressLoader;
