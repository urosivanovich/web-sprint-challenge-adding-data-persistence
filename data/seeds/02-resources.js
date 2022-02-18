exports.seed = function(knex) {
    return knex('resources').insert([
        {resource_name:'W3'},
        {resource_name:'School'},
        {resource_name:'Book'},
    ])
}