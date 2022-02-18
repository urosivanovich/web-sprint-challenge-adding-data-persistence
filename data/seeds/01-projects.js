exports.seed = function(knex) {
    return knex('projects').insert([
        {project_name:'Vanilla'},
        {project_name:'React'},
        {project_name:'Node'},
    ])
}