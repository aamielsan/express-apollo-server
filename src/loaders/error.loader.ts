import { Express, Request, Response, NextFunction } from 'express';
import errors, { ResponseError } from '../utils/error';

function errorLoader({ app }: { app: Express }) {
  // Default error handler
  app.use((err: ResponseError, _: Request, res: Response, __: NextFunction) => { // eslint-disable-line

    const e: ResponseError = (err.type === 'ResponseError')
      ? err
      : errors[500](err.message);

    res
      .status(e.status)
      .json({
        errors: [
          {
            code: e.code,
            message: e.message,
            status: e.status,
          }
        ],
      });
  });
}

export default errorLoader;
