// migrations/20240119144126-create-cbt-jawaban.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_jawaban', {
      jawaban_id: {
        type: Sequelize.DataTypes.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        unsigned: true
      },
      jawaban_soal_id: {
        type: Sequelize.DataTypes.BIGINT(20),
        allowNull: false,
        unsigned: true
      },
      jawaban_detail: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
        collate: 'utf8_unicode_ci'
      },
      jawaban_benar: {
        type: Sequelize.DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0
      },
      jawaban_aktif: {
        type: Sequelize.DataTypes.TINYINT(1),
        allowNull: false,
        defaultValue: 0
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_jawaban');
  }
};
