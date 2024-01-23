// seeders/20240119190000-cbt-tes.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_tes', [
      {
        tes_id: 5,
        tes_nama: 'Tes Uji Coba',
        tes_detail: 'Tes Uji Coba',
        tes_begin_time: '2020-09-06 17:03:00',
        tes_end_time: '2021-05-08 17:03:00',
        tes_duration_time: 30,
        tes_ip_range: '*.*.*.*',
        tes_results_to_users: 1,
        tes_detail_to_users: 0,
        tes_score_right: '1.00',
        tes_score_wrong: '0.00',
        tes_score_unanswered: '0.00',
        tes_max_score: '10.00',
        tes_token: 0,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_tes', null, {});
  }
};
