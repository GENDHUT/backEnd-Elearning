// seeders/20240123133500-cbt-user-grup.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_user_grup', [
      { grup_id: 5, grup_nama: 'XI MM' },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_user_grup', null, {});
  }
};
