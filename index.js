const db = require('./data/dbHelpers')

const projectID = 2;

const newProject = {
  project_name: "Learn PostGreSQL",
  project_description: "Learn how to incorporate the PostgreSQL database into a project in order to familiarize myself with it",
  completed: false
}

const newAction = {
  action_description: 'Design Database Tables',
  notes: 'Determine table relationships, setting up primary and foreign keys as necessary',
  is_complete: false,
  project_id: 1
}

// db.addProject(newProject)
// .then(project => {
//   console.log('project', project)
// }).catch(err => {
//   console.log(err)
// })

// db.addAction(newAction)
// .then(action => {
//   console.log('action', action)
// }).catch(err => {
//   console.log(err)
// })

db.getProject(projectID)
.then(project => {
  console.log('project', project)
}).catch(err => {
  console.log('issue with project')
})

