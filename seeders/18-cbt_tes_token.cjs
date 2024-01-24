// seeders/20240119220100-cbt-tes-token.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_tes_token', [
      {
        token_id: 12,
        token_isi: '299403',
        token_user_id: 5,
        token_ts: '2019-12-12 02:53:22',
        token_aktif: 1,
        token_tes_id: 0
      },
      // Tambahkan data lain sesuai kebutuhan
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_tes_token', null, {});
  }
};
