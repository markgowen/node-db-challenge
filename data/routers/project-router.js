const express = require('express');

const projects = require('../helpers/projects-helper');

const router = express.Router();

router.get('/', (req, res) => {
  projects
    .find()
    .then(projects => {
      projects.completed = projects.completed ? true : false;
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'The projects could not be retrieved.' });
    });
});

router.post('/', validateProject, (req, res) => {
  const projectData = req.body;

  projects
    .insert(projectData)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to create new project' });
    });
});

// Middleware
function validateProject(req, res, next) {
  if (!req.body.project_name) {
    res.status(400).json({ message: 'Missing project name' });
    return;
  }
  next();
}

module.exports = router;
