const db = require('../data/dbConfig.js')

function find() {

    return db('users as u')
    .select('u.id', 'u.username', 'u.role')
}

function findBy(filter) {

    return db('users as u')
    .select('u.id', 'u.username', 'u.password', 'u.role')
    .where(filter)
}

function findById(id) {

    return db('users as u')
    .select('u.id', 'u.username', 'password', 'u.role')
    .where('u.id', id)
    .first()
}



module.exports = {

    find,
    findBy,
    findById
}