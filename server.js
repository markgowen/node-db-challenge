const express = require('express');

const ProjectRouter = require('./data/routers/project-router');
const TaskRouter = require('./data/routers/task-router');
const ResourceRouter = require('./data/routers/resource-router');

const server = express();

server.use(express.json());
server.use('/api/projects', ProjectRouter, TaskRouter);
// server.use('/:id/tasks', TaskRouter)
server.use('/api/resources', ResourceRouter);

module.exports = server;
