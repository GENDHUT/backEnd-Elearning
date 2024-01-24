'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_soal', {
      soal_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      soal_topik_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
      },
      soal_detail: {
        type: Sequelize.TEXT,
        allowNull: false,
        collate: 'utf8_unicode_ci',
      },
      soal_tipe: {
        type: Sequelize.SMALLINT(3).UNSIGNED,
        allowNull: false,
        defaultValue: 1,
        comment: '1=Pilihan ganda, 2=essay, 3=jawaban singkat',
      },
      soal_kunci: {
        type: Sequelize.TEXT,
        collate: 'utf8_unicode_ci',
        defaultValue: null,
        comment: 'Kunci untuk soal jawaban singkat',
      },
      soal_difficulty: {
        type: Sequelize.SMALLINT(6),
        allowNull: false,
        defaultValue: 1,
      },
      soal_aktif: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
      soal_audio: {
        type: Sequelize.STRING(200),
        collate: 'utf8_unicode_ci',
        defaultValue: null,
      },
      soal_audio_play: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: 0,
      },
      soal_timer: {
        type: Sequelize.SMALLINT(10),
        defaultValue: null,
      },
      soal_inline_answers: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
      soal_auto_next: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
    });
    await queryInterface.addConstraint('cbt_soal', {
      fields: ['soal_topik_id'],
      type: 'foreign key',
      name: 'cbt_soal_ibfk_1',
      references: {
        table: 'cbt_topik',
        field: 'topik_id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
    });
    await queryInterface.addIndex('cbt_soal', ['soal_id'], { name: 'soal_id' });
    await queryInterface.addIndex('cbt_soal', ['soal_topik_id'], { name: 'p_question_subject_id' });
    // await queryInterface.sequelize.query('ALTER TABLE `cbt_soal` AUTO_INCREMENT = 215;');

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_soal');
  }
};
