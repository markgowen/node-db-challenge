const db = require('../dbConfig');

module.exports = {
  find,
  insert
};

function find() {
  return db('tasks');
}

function insert(task) {
  return db('tasks')
    .insert(task)
    .then(ids => ({ task_id: ids[0] }));
}
