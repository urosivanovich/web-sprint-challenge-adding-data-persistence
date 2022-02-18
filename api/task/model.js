const db = require('../../data/dbConfig')

const getTasks = async () => {

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
    !newTask.task_completed ? 
    newTask.task_completed=false :
    newTask.task_completed=false
    return newTask
}

module.exports = {
    getTasks,
    postTask
}