exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_id: 1,
          resource_name: 'Slack',
          resource_description: 'Communication Tool'
        },
        {
          resource_id: 2,
          resource_name: 'VS Code',
          resource_description: 'IDE'
        },
        {
          resource_id: 3,
          resource_name: 'Figma',
          resource_description: 'Design Software'
        },
        {
          resource_id: 4,
          resource_name: 'Zoom',
          resource_description: 'Video Conferencing'
        },
        {
          resource_id: 5,
          resource_name: 'POSTMAN',
          resource_description: 'Collaboration Platform for API Development'
        }
      ]);
    });
};
