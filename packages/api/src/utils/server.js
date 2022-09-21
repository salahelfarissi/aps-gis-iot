import express, { urlencoded, json } from 'express';
import routes from '../routes';

export default function createServer() {
  const app = express();

  app.use(urlencoded({ extended: true }));
  app.use(json({ limit: '50mb' }));

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Time-Zone');
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
    } else {
      next();
    }
  });

  app.use('/', routes);

  app.use(express.static('public'));

  return app;
}