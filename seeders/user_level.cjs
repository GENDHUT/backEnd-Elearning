// seeders/20240124101501-user_level.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_level', [
      { id: 1, level: 'admin', keterangan: 'Administrator' },
      { id: 7, level: 'operator-soal', keterangan: 'Operator Soal' },
      { id: 8, level: 'operator-tes', keterangan: 'Operator Tes' },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_level', null, {});
  }
};
