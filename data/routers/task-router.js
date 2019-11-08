const express = require('express');

const tasks = require('../helpers/tasks-helper');

const router = express.Router();

router.get('/:id/tasks', (req, res) => {
  const projectID = req.params;

  db.findTask(projectID)
    .then(tasks => {
      if (tasks.length) {
        tasks.completed = tasks.completed ? true : false;
        res.status(200).json(tasks);
      } else {
        res.status(404).json({
          message: 'The post with the specified ID does not exist.'
        });
      }
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ error: 'The comments information could not be retrieved.' });
    });
});

router.post('/:id/tasks', (req, res) => {
  const task = { ...req.body, project_id: req.params.project_id };

  tasks
    .findByProjectId(project_id)
    .then(project => {
      if (project) {
        tasks.insertTask(task, task_id).then(task => {
          res.status(201).json(task);
        });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find project with given id' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Failed to create task' });
    });
});

module.exports = router;
