import express from 'express';
import next from 'next';
import helmet from 'helmet';
import path from 'path';
import { PORT, IS_PROD } from './config';
import { logger } from './helpers';
import routes from './routes';

const app = next({
  dev: !IS_PROD,
  dir: path.join(__dirname, '../'),
  distDir: path.join(__dirname, '../.client-dist'),
});
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    server.use(
      helmet(),
      express.static(path.join(__dirname, '../static'), { maxage: !IS_PROD ? '0' : '1d' }),
    );

    // nested routes
    server.use('/api', routes);

    // ssr
    server.get('*', handle);

    server.listen(PORT, (err) => {
      if (err) throw err;
      logger.info(`> Ready on http://localhost:${PORT}`);
    });
  });
