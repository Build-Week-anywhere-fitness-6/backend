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

async function add(user) {
    const [id] = await db('users')
    .insert(user)
    return findById(id)
  }


module.exports = {

    find,
    findBy,
    findById,
    add
}