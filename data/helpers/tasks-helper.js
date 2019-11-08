const db = require('../dbConfig');

module.exports = {
  find,
  insert
};

function find(project_id) {
  return db
    .select(
      'project_name',
      'project_description',
      'task_name',
      'task_description'
    )
    .from('tasks')
    .join('projects', 'tasks.project_id', 'project_id')
    .where({ project_id });
}

function insert(task) {
  return db('tasks')
    .insert(task)
    .then(ids => ({ task_id: ids[0] }));
}
