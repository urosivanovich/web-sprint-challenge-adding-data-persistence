const db = require('../../data/dbConfig')

const getResources = () => {
    return db('resources as r')
}

const postResource = async (resource) => {
    const resource_id = await db('resources as r')
    .insert(resource)
    
    return getResources().where('resource_id', resource_id).first()
}

module.exports = {
    getResources,
    postResource
}
