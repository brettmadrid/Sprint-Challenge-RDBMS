const knex = require('knex');

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);

module.exports = {
  addProject: (project) => {
    return db('projects')
    .insert(project)
  },

  addAction: (action) => {
    const projectID = action.project_id;
    const subQuery = db.select('projectID').from('projects')
      return (
        db('actions').insert(action)
        .whereIn('projectID', subQuery)
      )
  },
}