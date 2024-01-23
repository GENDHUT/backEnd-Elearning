// seeders/20240119170000-cbt-konfigurasi-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_konfigurasi', [
      {
        konfigurasi_id: 1,
        konfigurasi_kode: 'link_login_operator',
        konfigurasi_isi: 'ya',
        konfigurasi_keterangan: 'Menampilkan Link Login Operator',
      },
      {
        konfigurasi_id: 2,
        konfigurasi_kode: 'cbt_nama',
        konfigurasi_isi: 'Computer Based-Test',
        konfigurasi_keterangan: 'Nama Penyelenggara ZYACBT',
      },
      {
        konfigurasi_id: 3,
        konfigurasi_kode: 'cbt_keterangan',
        konfigurasi_isi: 'Ujian Online Berbasis Komputer',
        konfigurasi_keterangan: 'Keterangan Penyelenggara ZYACBT',
      },
      {
        konfigurasi_id: 4,
        konfigurasi_kode: 'cbt_mobile_lock_xambro',
        konfigurasi_isi: 'tidak',
        konfigurasi_keterangan: 'Melakukan Lock pada browser mobile agar menggunakan Xambro Saja',
      },
      {
        konfigurasi_id: 5,
        konfigurasi_kode: 'cbt_informasi',
        konfigurasi_isi: '<p>Silahkan pilih Tes yang diikuti dari daftar tes yang tersedia dibawah ini. Apabila tes tidak muncul, silahkan menghubungi Operator yang bertugas.</p>\r\n',
        konfigurasi_keterangan: 'Informasi yang diberika di Dashboard peserta tes\'',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_konfigurasi', null, {});
  }
};
