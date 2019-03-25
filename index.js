const db = require('./data/dbHelpers')

const newProject = {
  project_name: "Learn PostGreSQL",
  project_description: "Learn how to incorporate the PostgreSQL database into a project in order to familiarize myself with it",
  completed: false
}

db.addProject(newProject)
.then(project => {
  console.log('project', project)
}).catch(err => {
  console.log(err)
})