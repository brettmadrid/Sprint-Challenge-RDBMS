
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {project_name: 'SprintChallenge',
         project_description: 'This Sprint explored Adding Data Persistence to Web APIs. Demonstrate proficiency by creating an API that persist data to SQLite3.',
         completed: false},

        {project_name: 'Sicilian White Opening Repertoire',
         project_description: 'Learn White repertoire versus the various Sicilian defenses to include: Dragon, Najdorf, Taimanov, Richter-Rauser, Sheveningen, Sveshnikov.',
         completed: false},
      ]);
    });
};
