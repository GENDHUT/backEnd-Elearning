// migrations/20240119213000-create-cbt-tes-soal.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_tes_soal', {
      tessoal_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED
      },
      tessoal_tesuser_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false
      },
      tessoal_user_ip: {
        type: Sequelize.STRING(39),
        collate: 'utf8_unicode_ci'
      },
      tessoal_soal_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false
      },
      tessoal_jawaban_text: {
        type: Sequelize.TEXT,
        collate: 'utf8_unicode_ci'
      },
      tessoal_nilai: {
        type: Sequelize.DECIMAL(10, 2)
      },
      tessoal_creation_time: {
        type: Sequelize.DATE
      },
      tessoal_display_time: {
        type: Sequelize.DATE
      },
      tessoal_change_time: {
        type: Sequelize.DATE
      },
      tessoal_reaction_time: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      tessoal_ragu: {
        type: Sequelize.INTEGER(1),
        allowNull: false,
        defaultValue: 0,
        comment: '1=ragu, 0=tidak ragu'
      },
      tessoal_order: {
        type: Sequelize.SMALLINT(6),
        allowNull: false,
        defaultValue: 1
      },
      tessoal_num_answers: {
        type: Sequelize.SMALLINT(5).UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      tessoal_comment: {
        type: Sequelize.TEXT,
        collate: 'utf8_unicode_ci'
      },
      tessoal_audio_play: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: 0
      }
    });
    await queryInterface.addIndex('cbt_tes_soal', ['tessoal_id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('cbt_tes_soal', ['tessoal_tesuser_id', 'tessoal_soal_id'], { name: 'ak_testuser_question', unique: true });
    await queryInterface.addIndex('cbt_tes_soal', ['tessoal_soal_id'], { name: 'p_testlog_question_id' });
    await queryInterface.addIndex('cbt_tes_soal', ['tessoal_tesuser_id'], { name: 'p_testlog_testuser_id' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_tes_soal');
  }
};
