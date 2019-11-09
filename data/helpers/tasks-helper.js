const db = require('../dbConfig');

module.exports = {
  findById,
  findTask,
  insertTask
};

function findById(project_id) {
  return db('projects')
    .where({ project_id })
    .first();
}

function findTask(project_id) {
  return db
    .select(
      'tasks.task_id',
      'project_name',
      'project_description',
      'task_description'
    )
    .from('tasks')
    .join('projects', 'tasks.project_id', 'projects.project_id')
    .where('tasks.project_id', project_id);
}

function insertTask(task) {
  return db('tasks')
    .insert(task)
    .then(ids => ({ task_id: ids[0] }));
}
