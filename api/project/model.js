const db = require('../../data/dbConfig')

const getProjects = async () => {
    const rows =  await db('projects')
 return rows.map(row => {
     if(row.project_completed === 0){
         return {
             ...row,
             project_completed: false
            }
     }else{
        return {
            ...row,
            project_completed: true
        }
     }
 })
}

const postProject = async (project) => {
    const newProject = await db("projects").insert(project)
    .then(([project_id]) => {
        return db('projects')
        .where('project_id', project_id).first()
    })
    if(newProject.project_completed == 0){
        return{
            ...project,
            project_completed:false
        }
    }else{
        return{
            ...project,
            project_completed:true
        }
    }
    
    
}

module.exports = {
    getProjects,
    postProject
}
