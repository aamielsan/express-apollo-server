import path from 'path';
import { Express } from 'express';

function routeLoader({ app }: { app: Express }) {
  const routes = require(path.join(__dirname, '/../routes')).default;
  for (const { path, router } of routes) {
    app.use(path, router);
  }
}

export default routeLoader;
