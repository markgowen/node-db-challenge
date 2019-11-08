exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_id: 1,
          project_id: 1,
          task_description:
            'Find other students that you think you will work well with',
          task_notes: 'Could be within your team or from other build weeks'
        },
        {
          task_id: 2,
          project_id: 2,
          task_description:
            'Think about what project would be one that you want on your portfolio',
          task_notes: 'This could be something you have already worked on'
        },
        {
          task_id: 3,
          project_id: 3,
          task_description: 'Formulate wireframe and style design',
          task_notes: 'Figma is a great tool'
        }
      ]);
    });
};
