const db = require('../../data/dbConfig')

const getTasks = async () => {
    
//     select t.*, project_name, project_description
//     from tasks as t
//    left join projects as p
//     on t.project_id = p.project_id;
    const rows = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('t.*', 'project_name', 'project_description')

        rows.forEach(task => {
           !task.task_completed ? 
           task.task_completed = false : 
           task.task_completed = true
       })
       return rows
}
 
const postTask = async (task) => {
    const newTask = await db('tasks as t').insert(task)
    .then(([task_id]) => {
        return db('tasks')
        .where('task_id', task_id).first()
    })
    if(newTask.task_completed == 0){
        return{
            ...task,
            task_completed:false
        }
    }else{
        return{
            ...task,
            task_completed:true
        }
    }
}

module.exports = {
    getTasks,
    postTask
}