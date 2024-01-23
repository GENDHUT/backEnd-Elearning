// seeders/20240119221500-cbt-tes-topik-set.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_tes_topik_set', [
      {
        tset_id: 5,
        tset_tes_id: 5,
        tset_topik_id: 7,
        tset_tipe: 0,
        tset_difficulty: 1,
        tset_jumlah: 10,
        tset_jawaban: 5,
        tset_acak_jawaban: 1,
        tset_acak_soal: 1
      },
      // Tambahkan data lain sesuai kebutuhan
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_tes_topik_set', null, {});
  }
};
