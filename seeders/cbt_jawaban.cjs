// seeders/20240119150000-cbt-jawaban-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_jawaban', [
        { jawaban_id: 186, jawaban_soal_id: 57, jawaban_detail: '<p>1 Syawal</p>\r\n', jawaban_benar: 1, jawaban_aktif: 1 },
        { jawaban_id: 187, jawaban_soal_id: 57, jawaban_detail: '<p>1 Agustus</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 188, jawaban_soal_id: 57, jawaban_detail: '<p>1 Januari</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 189, jawaban_soal_id: 57, jawaban_detail: '<p>1 Desember</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 190, jawaban_soal_id: 57, jawaban_detail: '<p>14 Februari</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 191, jawaban_soal_id: 56, jawaban_detail: '<p>Nazril Irham</p>', jawaban_benar: 1, jawaban_aktif: 1 },
        { jawaban_id: 192, jawaban_soal_id: 56, jawaban_detail: '<p>Joko Susilo</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 193, jawaban_soal_id: 56, jawaban_detail: '<p>Wahyu Saputra</p>\r\n', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 194, jawaban_soal_id: 56, jawaban_detail: '<p>Aril Piterpen</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 195, jawaban_soal_id: 56, jawaban_detail: 'Joko Wow', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 196, jawaban_soal_id: 55, jawaban_detail: '<p>Soekarno</p>', jawaban_benar: 1, jawaban_aktif: 1 },
        { jawaban_id: 197, jawaban_soal_id: 55, jawaban_detail: '<p>Soeharto</p>\r\n', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 198, jawaban_soal_id: 55, jawaban_detail: '<p>Susilo Bambang Yudhoyono</p>\r\n', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 199, jawaban_soal_id: 55, jawaban_detail: '<p>BJ. Habibie</p>\r\n', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 200, jawaban_soal_id: 55, jawaban_detail: '<p>Joko Widodo</p>\r\n', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 201, jawaban_soal_id: 54, jawaban_detail: '<p>Sun East Mall</p>', jawaban_benar: 1, jawaban_aktif: 1 },
        { jawaban_id: 202, jawaban_soal_id: 54, jawaban_detail: '<p>Matahari</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 203, jawaban_soal_id: 54, jawaban_detail: '<p>Bulan</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 204, jawaban_soal_id: 54, jawaban_detail: '<p>Tanah Abang</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 205, jawaban_soal_id: 54, jawaban_detail: '<p>Tanah Lempong</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 206, jawaban_soal_id: 53, jawaban_detail: '<p>Sekolah Menengah Kejuruan</p>', jawaban_benar: 1, jawaban_aktif: 1 },
        { jawaban_id: 207, jawaban_soal_id: 53, jawaban_detail: '<p>Sekolah Menengah Kejujuran</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 208, jawaban_soal_id: 53, jawaban_detail: '<p>Sekolah Maju Sendiri</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 209, jawaban_soal_id: 53, jawaban_detail: '<p>Sekolah Mak Ku</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 210, jawaban_soal_id: 53, jawaban_detail: '<p>Sekolah Memilih Kekasih</p>', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 211, jawaban_soal_id: 64, jawaban_detail: 'Akhirnya aku menemukanmu', jawaban_benar: 1, jawaban_aktif: 1 },
        { jawaban_id: 212, jawaban_soal_id: 64, jawaban_detail: 'Akhir dirimu', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 213, jawaban_soal_id: 64, jawaban_detail: 'Susahnya jadi dia', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 214, jawaban_soal_id: 64, jawaban_detail: 'Jones', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 215, jawaban_soal_id: 64, jawaban_detail: 'Josan - Jomblo Pas Pasan', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 621, jawaban_soal_id: 161, jawaban_detail: '<p>Aksi bela Jomblo</p>\r\n', jawaban_benar: 1, jawaban_aktif: 1 },
        { jawaban_id: 622, jawaban_soal_id: 161, jawaban_detail: '<p>Aksi bela cewek</p>\r\n', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 623, jawaban_soal_id: 161, jawaban_detail: '<p>14 Februari</p>\r\n', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 624, jawaban_soal_id: 161, jawaban_detail: '<p>Hari Valentine</p>\r\n', jawaban_benar: 0, jawaban_aktif: 1 },
        { jawaban_id: 625, jawaban_soal_id: 161, jawaban_detail: '<p>Turun ke jalan</p>\r\n', jawaban_benar: 0, jawaban_aktif: 1 },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_jawaban', null, {});
  }
};
