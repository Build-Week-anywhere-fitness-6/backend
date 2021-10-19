
exports.up = function(knex) {
    return knex.schema.createTable("clients", function(actions) {
        clients.increments()
        clients.string("username", 128).notNullable()
        clients.string("password", 6).notNullable()
    })
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("clients")
}
