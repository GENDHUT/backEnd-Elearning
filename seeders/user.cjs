// seeders/20240123141000-user-seed.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('user', [
      {
        id: 1,
        username: 'admin',
        password: 'd033e22ae348aeb5660fc2140aec35850c4da997',
        nama: 'Achmad Lutfi',
        opsi1: '',
        opsi2: '',
        keterangan: '',
        level: 'admin',
        ts: '2015-07-29 18:12:03',
      },
      {
        id: 4,
        username: 'operator',
        password: 'fe96dd39756ac41b74283a9292652d366d73931f',
        nama: 'Operator',
        opsi1: '',
        opsi2: '',
        keterangan: 'Operator',
        level: 'operator-soal',
        ts: '2018-03-30 12:58:55',
      },
      {
        id: 5,
        username: 'joko',
        password: '97c358728f7f947c9a279ba9be88308395c7cc3a',
        nama: 'Joko',
        opsi1: '',
        opsi2: '',
        keterangan: 'Haloo',
        level: 'admin',
        ts: '2019-12-12 02:53:12',
      },
      // ... (tambahkan data lain jika diperlukan)
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  }
};
