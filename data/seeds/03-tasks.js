exports.seed = function(knex) {
    return knex('tasks').insert([
        {task_description:'important!!', project_id:'1'},
        {task_description:'important', project_id:'2'}, 
        {task_description:'fun', project_id:'3'},
    ])
}