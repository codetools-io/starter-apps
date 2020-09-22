const { createProxyMiddleware } = require('http-proxy-middleware');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

module.exports = function (app) {
  server.use(middlewares);
  server.use(router);
  server.listen(3001, () => {
    console.log('JSON Server is running');
  });

  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};
