// migrations/20240119160000-create-cbt-konfigurasi.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_konfigurasi', {
      konfigurasi_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      konfigurasi_kode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      konfigurasi_isi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      konfigurasi_keterangan: {
        type: Sequelize.STRING,
        allowNull: false
      },
    });
    // await queryInterface.addIndex('cbt_konfigurasi', ['konfigurasi_id'], { name: 'konfigurasi_id' });
    // await queryInterface.addIndex('cbt_konfigurasi', ['konfigurasi_kode'], { unique: true, name: 'konfigurasi_kode' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_konfigurasi');
  }
};
