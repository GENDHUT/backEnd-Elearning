// seeders/20240126141502-user_menu.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user_menu', [
      { id: 1, tipe: 0, parent: '', kode_menu: 'user', nama_menu: 'Pengaturan', url: '#', icon: 'fa fa-user', urutan: 20 },
      { id: 3, tipe: 1, parent: 'user', kode_menu: 'user_atur', nama_menu: 'Pengaturan User', url: 'manager/useratur', icon: 'fa fa-circle-o', urutan: 5 },
      { id: 4, tipe: 1, parent: 'user', kode_menu: 'user_level', nama_menu: 'Pengaturan Level', url: 'manager/userlevel', icon: 'fa fa-circle-o', urutan: 6 },
      { id: 5, tipe: 1, parent: 'user', kode_menu: 'user_menu', nama_menu: 'Pengaturan Menu', url: 'manager/usermenu', icon: 'fa fa-circle-o', urutan: 7 },
      { id: 6, tipe: 0, parent: '', kode_menu: 'modul', nama_menu: 'Data Modul', url: '#', icon: 'fa fa-book', urutan: 2 },
      { id: 7, tipe: 1, parent: 'modul', kode_menu: 'modul-daftar', nama_menu: 'Daftar Soal', url: 'manager/modul_daftar', icon: 'fa fa-circle-o', urutan: 5 },
      { id: 8, tipe: 1, parent: 'modul', kode_menu: 'modul-topik', nama_menu: 'Topik', url: 'manager/modul_topik', icon: 'fa fa-circle-o', urutan: 2 },
      { id: 10, tipe: 0, parent: '', kode_menu: 'peserta', nama_menu: 'Data Peserta', url: '#', icon: 'fa fa-users', urutan: 3 },
      { id: 11, tipe: 1, parent: 'peserta', kode_menu: 'peserta-daftar', nama_menu: 'Daftar Peserta', url: 'manager/peserta_daftar', icon: 'fa fa-circle-o', urutan: 2 },
      { id: 12, tipe: 1, parent: 'peserta', kode_menu: 'peserta-group', nama_menu: 'Daftar Group', url: 'manager/peserta_group', icon: 'fa fa-circle-o', urutan: 1 },
      { id: 13, tipe: 1, parent: 'peserta', kode_menu: 'peserta-import', nama_menu: 'Import Data Peserta', url: 'manager/peserta_import', icon: 'fa fa-circle-o', urutan: 3 },
      { id: 14, tipe: 0, parent: '', kode_menu: 'tes', nama_menu: 'Data Tes', url: '#', icon: 'fa fa-tasks', urutan: 4 },
      { id: 15, tipe: 1, parent: 'tes', kode_menu: 'tes-tambah', nama_menu: 'Tambah Tes', url: 'manager/tes_tambah', icon: 'fa fa-circle-o', urutan: 1 },
      { id: 16, tipe: 1, parent: 'tes', kode_menu: 'tes-daftar', nama_menu: 'Daftar Tes', url: 'manager/tes_daftar', icon: 'fa fa-circle-o', urutan: 2 },
      { id: 17, tipe: 1, parent: 'tes', kode_menu: 'tes-hasil', nama_menu: 'Hasil Tes', url: 'manager/tes_hasil', icon: 'fa fa-circle-o', urutan: 6 },
      { id: 18, tipe: 1, parent: 'modul', kode_menu: 'modul-soal', nama_menu: 'Soal', url: 'manager/modul_soal', icon: 'fa fa-circle-o', urutan: 3 },
      { id: 19, tipe: 1, parent: 'tes', kode_menu: 'tes-token', nama_menu: 'Token', url: 'manager/tes_token', icon: 'fa fa-circle-o', urutan: 8 },
      { id: 22, tipe: 1, parent: 'modul', kode_menu: 'modul-filemanager', nama_menu: 'File Manager', url: 'manager/modul_filemanager', icon: 'fa fa-circle-o', urutan: 6 },
      { id: 24, tipe: 1, parent: 'modul', kode_menu: 'modul-import', nama_menu: 'Import Soal Spreadsheet', url: 'manager/modul_import', icon: 'fa fa-circle-o', urutan: 4 },
      { id: 25, tipe: 1, parent: 'tes', kode_menu: 'tes-evaluasi', nama_menu: 'Evaluasi Tes', url: 'manager/tes_evaluasi', icon: 'fa fa-circle-o', urutan: 5 },
      { id: 28, tipe: 1, parent: 'tes', kode_menu: 'tes-hasil-operator', nama_menu: 'Hasil Tes Operator', url: 'manager/tes_hasil_operator', icon: 'fa fa-circle-o', urutan: 10 },
      { id: 30, tipe: 0, parent: '', kode_menu: 'tool', nama_menu: 'Tool', url: '#', icon: 'fa fa-wrench', urutan: 6 },
      { id: 31, tipe: 1, parent: 'tool', kode_menu: 'tool-backup', nama_menu: 'Database', url: 'manager/tool_backup', icon: 'fa fa-database', urutan: 1 },
      { id: 32, tipe: 1, parent: 'tes-laporan', kode_menu: 'laporan-rekap', nama_menu: 'Rekap Hasil Tes', url: 'manager/laporan_rekap_hasil', icon: 'fa fa-circle-o', urutan: 7 },
      { id: 33, tipe: 1, parent: 'tool', kode_menu: 'tool-exportimport-soal', nama_menu: 'Export / Import Soal', url: 'manager/tool_exportimport_soal', icon: 'fa fa-circle-o', urutan: 2 },
      { id: 34, tipe: 1, parent: 'user', kode_menu: 'user-zyacbt', nama_menu: 'Pengaturan ZYACBT', url: 'manager/pengaturan_zyacbt', icon: 'fa fa-circle-o', urutan: 1 },
      { id: 37, tipe: 1, parent: 'peserta', kode_menu: 'peserta-kartu', nama_menu: 'Cetak Kartu', url: 'manager/peserta_kartu', icon: 'fa fa-circle-o', urutan: 5 },
      { id: 38, tipe: 0, parent: '', kode_menu: 'tes-laporan', nama_menu: 'Laporan', url: '#', icon: 'fa fa-print', urutan: 5 },
      { id: 41, tipe: 1, parent: 'tes-laporan', kode_menu: 'laporan-analisis-butir-soal', nama_menu: 'Analisis Butir Soal', url: 'manager/laporan_analisis_butir_soal', icon: 'fa fa-circle-o', urutan: 1 },
      { id: 42, tipe: 1, parent: 'tes-laporan', kode_menu: 'laporan-analisis-soal', nama_menu: 'Analisis Soal', url: 'manager/laporan_analisis_soal', icon: 'fa fa-circle-o', urutan: 2 },
      { id: 43, tipe: 1, parent: 'modul', kode_menu: 'modul-import-word', nama_menu: 'Import Soal Word', url: 'manager/modul_import_word', icon: 'fa fa-circle-o', urutan: 4 },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_menu', null, {});
  }
};
