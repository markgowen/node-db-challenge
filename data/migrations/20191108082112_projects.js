exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.string('project_name', 255).notNullable();
      tbl.string('project_description', 255);
      tbl
        .boolean('completed')
        .defaultTo(0)
        .notNullable();
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id');
      tbl
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('task_description', 255).notNullable();
      tbl.string('task_notes', 255);
      tbl
        .boolean('completed')
        .defaultTo(0)
        .notNullable();
    })
    .createTable('resources', tbl => {
      tbl.increments('resource_id');
      tbl
        .string('resource_name', 255)
        .unique()
        .notNullable();
      tbl.string('resource_description', 255);
    })
    .createTable('project_resources', tbl => {
      tbl.increments();
      tbl
        .integer('project_id')
        .notNullable()
        .unsigned()
        .references('project_id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('resource_id')
        .notNullable()
        .unsigned()
        .references('resource_id')
        .inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects');
};
