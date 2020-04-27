import { Router, NextFunction } from 'express';
import errors from '../utils/error';

const router = Router();

router.use((_, __, next: NextFunction) => {
  next(errors.NotFoundError());
});

export default router;
