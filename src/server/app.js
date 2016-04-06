import express from 'express';
import winston from 'winston';
import { join, resolve } from 'path';

const app = express();
let port = 3000;

if (typeof process.env.NODE_ENV === 'undefined') {
  const bundle = require('./dev-server').default;
  const httpProxy = require('http-proxy');
  const proxy = httpProxy.createProxyServer();
  port = 3000;
  winston.info('SPINNING UP DEV ENVIRONMENT...');
  bundle();

  app.all('/dist/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080',
    });
  });
  app.all('/sockjs-node/*', (req, res) => {
    proxy.web(req, res, {
      target: 'http://localhost:8080',
    });
  });
  proxy.on('error', () => {
    winston.info('Could not connect to proxy, please try again...');
  });
}

app.use(express.static(join(__dirname, './../../build')));

app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, './../../build', 'index.html'));
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
