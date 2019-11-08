exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_id: 1,
          project_name: 'Prepare for labs',
          project_description: 'Start connecting with other dev students'
        },
        {
          project_id: 2,
          project_name: 'Decide lab project',
          project_description: 'Decide what app you want to build'
        },
        {
          project_id: 3,
          project_name: 'Design lab project',
          project_description: 'Start designing lab project'
        }
      ]);
    });
};
