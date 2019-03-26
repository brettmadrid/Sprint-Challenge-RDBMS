const express = require("express");

const projectsRouter = require("./data/routers/projectsRouter");
const actionsRouter = require("./data/routers/actionsRouter");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.send(`
    <h2>Lambda Sprint Challenge RDBMS</h2>
    `);
});

module.exports = server;