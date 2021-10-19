
exports.up = function(knex) {
    return knex.schema.createTable("instructors", function(actions) {
        instructors.increments()
        instructors.string("username", 128).notNullable()
        instructors.string("password", 6).notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("instructors")
};
