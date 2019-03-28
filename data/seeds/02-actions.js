
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_description: 'Set up project',
         notes: 'Run Yarn, npm init -y, add necessary dependencies, including nodemon, add /data directory for database',
         is_complete: true,
         project_id: 1
        },

        {action_description: 'Create tables',
         notes: 'Run knex migrate:make to create table schemas',
         is_complete: true,
         project_id: 1
        },

        {action_description: 'Seed table',
         notes: 'Run knex seed:make to create seed files',
         is_complete: true,
         project_id: 1
        },

        {action_description: 'Najdorf',
         notes: 'Study opening moves 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 a6',
         is_complete: true,
         project_id: 2
        },

        {action_description: 'Dragon and Accelerated Dragon',
         notes: 'Study opening moves 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 g6',
         is_complete: false,
         project_id: 2
        },

        {action_description: 'Richter-Rauser',
         notes: 'Study opening moves 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6',
         is_complete: false,
         project_id: 2
        },

        {action_description: 'Taimanov',
         notes: 'Study opening moves 1.e4 c5 2.Nf3 e6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6',
         is_complete: false,
         project_id: 2
        },

        {action_description: 'Sheveningen',
         notes: 'Study opening moves 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e6',
         is_complete: false,
         project_id: 2
        },

        {action_description: 'Sveshnikov',
         notes: 'Study opening moves 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 e5',
         is_complete: false,
         project_id: 2
        },
      ]);
    });
};
