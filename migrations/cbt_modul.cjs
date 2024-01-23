// migrations/20240119180000-create-cbt-modul.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_modul', {
      modul_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      modul_nama: {
        type: Sequelize.STRING,
        allowNull: false
      },
      modul_aktif: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_modul');
  }
};
