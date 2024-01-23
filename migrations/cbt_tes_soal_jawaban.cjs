// migrations/20240119214500-create-cbt-tes-soal-jawaban.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_tes_soal_jawaban', {
      soaljawaban_tessoal_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        primaryKey: true
      },
      soaljawaban_jawaban_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
        primaryKey: true
      },
      soaljawaban_selected: {
        type: Sequelize.SMALLINT(6),
        allowNull: false,
        defaultValue: -1
      },
      soaljawaban_order: {
        type: Sequelize.SMALLINT(6),
        allowNull: false,
        defaultValue: 1
      },
      soaljawaban_position: {
        type: Sequelize.BIGINT(20).UNSIGNED
      }
    });
    await queryInterface.addIndex('cbt_tes_soal_jawaban', ['soaljawaban_tessoal_id', 'soaljawaban_jawaban_id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('cbt_tes_soal_jawaban', ['soaljawaban_jawaban_id'], { name: 'p_logansw_answer_id' });
    await queryInterface.addIndex('cbt_tes_soal_jawaban', ['soaljawaban_tessoal_id'], { name: 'p_logansw_testlog_id' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_tes_soal_jawaban');
  }
};
