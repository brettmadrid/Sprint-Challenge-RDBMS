const knex = require('knex');

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);

module.exports = {
  addProject: (project) => {
    return db('projects')
    .insert(project)
  },
}