const router = require('express').Router();

const tasks = require('../helpers/tasks-helper');

router.get('/:id/tasks', (req, res) => {
  tasks.completed = tasks.completed ? true : false;
  tasks
    .findById(req.params)
    .then(tasks => {
      if (tasks.length) {
        res.status(200).json(tasks);
      } else {
        res
          .status(404)
          .json({ message: 'Could not retrieve tasks for given project' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Failed to get tasks' });
    });
});

router.post('/:id/tasks', (req, res) => {
  const task = { ...req.body, project_id: req.params.project_id };

  tasks
    .findById(project_id)
    .then(project => {
      if (project) {
        tasks.insertTask(task, project_id).then(task => {
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
