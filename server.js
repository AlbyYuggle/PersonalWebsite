const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("projects.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8000;
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(router);

server.listen(port);
