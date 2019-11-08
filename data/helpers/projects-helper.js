const db = require('../dbConfig');

module.exports = {
  find,
  insert
};

function find() {
  return db('projects');
}

function insert(project) {
  return db('projects')
    .insert(project)
    .then(ids => ({ project_id: ids[0] }));
}
