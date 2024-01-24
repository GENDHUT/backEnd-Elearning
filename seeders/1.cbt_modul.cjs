// seeders/20240119180500-seed-cbt-modul.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_modul', [
      {
        modul_id: 9,
        modul_nama: 'Default',
        modul_aktif: 1
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_modul', null, {});
  }
};
