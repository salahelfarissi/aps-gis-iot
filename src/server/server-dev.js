import { createServer as createServerHttp } from 'http';
import createServer from '../utils/server';
import open from 'open';

const PORT = process.env.PORT || 8080;
const app = createServer();

createServerHttp(app).listen(PORT, () => {
  console.log(`Server running on https://::${PORT} ...`);
  open(`http://localhost:${PORT}`);
});
