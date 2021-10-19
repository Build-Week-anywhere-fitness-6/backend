
exports.up = function(knex) {
    return knex.schema.createTable("class", function(classdetail) {
        classdetail.increments()
        classdetail
            .integer("class_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("classes")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
        classdetail
            .integer("client_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("clients")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("classdetail");
};
