// seeders/20240123120000-cbt-topik.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_topik', [
      { topik_id: 7, topik_modul_id: 9, topik_nama: 'Soal Uji Coba', topik_detail: 'Kumpulan Soal untuk Uji Coba', topik_aktif: 1 },
      { topik_id: 8, topik_modul_id: 9, topik_nama: 'Testing', topik_detail: 'testing', topik_aktif: 1 },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_topik', null, {});
  }
};
