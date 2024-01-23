// seeders/20240123141501-user_akses.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_akses', [
      { id: 254, level: 'operator-soal', kode_menu: 'modul-daftar', add: 1, edit: 1 },
      { id: 255, level: 'operator-soal', kode_menu: 'modul-filemanager', add: 1, edit: 1 },
      { id: 256, level: 'operator-soal', kode_menu: 'modul-import', add: 1, edit: 1 },
      { id: 257, level: 'operator-soal', kode_menu: 'modul-soal', add: 1, edit: 1 },
      { id: 258, level: 'operator-soal', kode_menu: 'modul-topik', add: 1, edit: 1 },
      { id: 259, level: 'operator-tes', kode_menu: 'tes-hasil-operator', add: 1, edit: 1 },
      { id: 260, level: 'operator-tes', kode_menu: 'tes-token', add: 1, edit: 1 },
      { id: 481, level: 'admin', kode_menu: 'laporan-analisis-butir-soal', add: 1, edit: 1 },
      { id: 482, level: 'admin', kode_menu: 'peserta-kartu', add: 1, edit: 1 },
      { id: 483, level: 'admin', kode_menu: 'peserta-group', add: 1, edit: 1 },
      { id: 484, level: 'admin', kode_menu: 'peserta-daftar', add: 1, edit: 1 },
      { id: 485, level: 'admin', kode_menu: 'modul-daftar', add: 1, edit: 1 },
      { id: 486, level: 'admin', kode_menu: 'tes-daftar', add: 1, edit: 1 },
      { id: 487, level: 'admin', kode_menu: 'tool-backup', add: 1, edit: 1 },
      { id: 488, level: 'admin', kode_menu: 'tes-evaluasi', add: 1, edit: 1 },
      { id: 489, level: 'admin', kode_menu: 'tool-exportimport-soal', add: 1, edit: 1 },
      { id: 490, level: 'admin', kode_menu: 'modul-filemanager', add: 1, edit: 1 },
      { id: 491, level: 'admin', kode_menu: 'tes-hasil', add: 1, edit: 1 },
      { id: 492, level: 'admin', kode_menu: 'peserta-import', add: 1, edit: 1 },
      { id: 493, level: 'admin', kode_menu: 'modul-import', add: 1, edit: 1 },
      { id: 494, level: 'admin', kode_menu: 'modul-import-word', add: 1, edit: 1 },
      { id: 496, level: 'admin', kode_menu: 'user_level', add: 1, edit: 1 },
      { id: 497, level: 'admin', kode_menu: 'user_menu', add: 1, edit: 1 },
      { id: 498, level: 'admin', kode_menu: 'user_atur', add: 1, edit: 1 },
      { id: 499, level: 'admin', kode_menu: 'user-zyacbt', add: 1, edit: 1 },
      { id: 500, level: 'admin', kode_menu: 'laporan-rekap', add: 1, edit: 1 },
      { id: 501, level: 'admin', kode_menu: 'modul-soal', add: 1, edit: 1 },
      { id: 502, level: 'admin', kode_menu: 'tes-tambah', add: 1, edit: 1 },
      { id: 503, level: 'admin', kode_menu: 'tes-token', add: 1, edit: 1 },
      { id: 504, level: 'admin', kode_menu: 'modul-topik', add: 1, edit: 1 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_akses', null, {});
  }
};
