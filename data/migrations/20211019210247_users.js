
exports.up = function(knex) {
    return knex.schema.createTable("users", function(users) {
        users.increments()
        users.string("username", 128).notNullable()
        users.string("password", 64).notNullable()
        users.string("role", 10).notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
}
