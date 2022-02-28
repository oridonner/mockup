import http from 'http';

import app from './app';

const port = process.env.SERVICE_PORT ?? 5000;

(async () => {
  const server = http.createServer(app);
  server.listen(port);
  server.on('error', (err) => {
    // eslint-disable-next-line no-console
    console.log('Error', { message: err.message });
  });
  server.on('listening', () => {
    // eslint-disable-next-line no-console
    console.log(`Service is running in port ${port}`);
  });
})();
