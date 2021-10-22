const { restricted } = require('../auth/auth-middleware.js')
const db = require('../data/dbConfig.js')

function find() {
    return db('classes')
}

function findById(id) {
    return db('classes')
    .where('class_id', id)
    .first()
}

function update(class_id, client_id) {
    const toUpdate = await findById(class_id)
    const registeredClients = toUpdate.registered
    if (toUpdate.registered < toUpdate.max_size) {
        toUpdate = {...toUpdate, registered: registeredClients + 1 } 
    } else {
        next()
    }
}

module.exports = {

    find,
    findBy,
    findById
}