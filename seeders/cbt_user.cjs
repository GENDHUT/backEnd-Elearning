// seeders/20240123130000-cbt-user.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_user', [
      {
        user_id: 1,
        user_grup_id: 5,
        user_name: 'lutfi',
        user_password: 'lutfi',
        user_email: '',
        user_regdate: '2018-01-11 04:38:27',
        user_ip: null,
        user_firstname: 'Muhammad Lutfial Hakim',
        user_birthdate: null,
        user_birthplace: null,
        user_level: 1,
        user_detail: 'Ruang 1, Sesi 1',
      },
      {
        user_id: 2,
        user_grup_id: 5,
        user_name: 'joko',
        user_password: 'joko',
        user_email: '',
        user_regdate: '2018-08-11 03:49:25',
        user_ip: null,
        user_firstname: 'Joko Susanto',
        user_birthdate: null,
        user_birthplace: null,
        user_level: 1,
        user_detail: 'Ruang 1, Sesi 2',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_user', null, {});
  }
};
