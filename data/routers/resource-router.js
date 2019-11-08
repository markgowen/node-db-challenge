const express = require('express');

const resources = require('../helpers/resources-helper');

const router = express.Router();

router.get('/', (req, res) => {
  resources
    .find()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'The resources could not be retrieved.' });
    });
});

router.post('/', validateResource, (req, res) => {
  resources
    .insert(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(err => {
      res.status(500).json({ error: 'Failed to create new resource' });
    });
});

// Middleware
function validateResource(req, res, next) {
  if (!req.body.resource_name) {
    res.status(400).json({ message: 'Missing resource name' });
    return;
  }
  next();
}

module.exports = router;
