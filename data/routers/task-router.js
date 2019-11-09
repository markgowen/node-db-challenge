const express = require('express');

const tasks = require('../helpers/tasks-helper');

const router = express.Router();

router.get('/:id/tasks', (req, res) => {
  tasks
    .findTask(req.params.id)
    .then(tasks => {
      if (tasks.length) {
        const formattedTasks = tasks.map(task => {
          return { ...task, completed: task.completed ? true : false };
        });
        res.status(200).json(formattedTasks);
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
  const task = { ...req.body, project_id: req.params.id };

  tasks
    .findById(task.project_id)
    .then(project => {
      if (project) {
        tasks.insertTask(task).then(task => {
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
