
exports.up = function(knex) {
    return knex.schema.createTable("classes", function(actions) {
        classes.increments()
        classes.string("class_name", 128).notNullable()
        classes.string("type", 128)
        classes.datetime("start_time")
        classes.integer("duration")
        classes.integer("intensity")
        classes.string("location", 128)
        classes.integer("max_size")
        classes.integer("registered")
        classes
            .integer("instructor_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("instructors")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("classes")
};
