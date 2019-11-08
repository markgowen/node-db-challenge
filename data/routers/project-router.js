const router = require('express').Router();

const projects = require('../helpers/projects-helper');

router.get('/', (req, res) => {
  projects
    .find()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'The projects could not be retrieved.' });
    });
});

router.post('/', validateProject, (req, res) => {
  projects
    .insert(req.data)
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
