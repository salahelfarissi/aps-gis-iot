import { createServer as createServerHttp } from 'http';
import { join } from 'path';
import createServer from './utils/server';

require('dotenv').config({ path: join(__dirname, '.env') });

const port = process.env.PORT || 5000;
const app = createServer();

createServerHttp(app).listen(port, () => {
  console.log(`Server running on http://::${port}.`);
});