const db = require('../dbConfig');

module.exports = {
  find,
  insert
};

function find() {
  return db('resources');
}

function insert(resource) {
  return db('resources')
    .insert(resource)
    .then(ids => ({ resource_id: ids[0] }));
}
