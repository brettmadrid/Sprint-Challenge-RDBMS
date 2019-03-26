const knex = require('knex');

const dbConfig = require('../knexfile.js');

const db = knex(dbConfig.development);

const mappers = require('./mappers');

module.exports = {

  getProjects: () => {
    return db('projects')
  },

  deleteProject: function(id) {
    return db('projects')
      .where('id', id)
      .del();
  },

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

  getProject: function(id) {
    let query = db('projects as p');

    if (id) {
      query.where('p.id', id).first();

      const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function(results) {
        let [project, actions] = results;
        project.actions = actions;

        return mappers.projectToBody(project);
      });
    }

    return query.then(projects => {
      return projects.map(project => mappers.projectToBody(project));
    });
  },

  getProjectActions: function(projectId) {
    return db('actions')
      .where('project_id', projectId)
      .then(actions => actions.map(action => mappers.actionToBody(action)));
  },

  getActions: function() {
    return db('actions')
  },

  deleteAction: function(id) {
    return db('actions')
      .where('id', id)
      .del();
  },
}