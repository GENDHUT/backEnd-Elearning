// migrations/20240119144126-create-cbt-jawaban.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_jawaban', {
      jawaban_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unsigned: true,
        autoIncrement: true
      },
      jawaban_soal_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
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
    await queryInterface.addConstraint('cbt_jawaban', {
      fields: ['jawaban_soal_id'],
      type: 'foreign key',
      name: 'cbt_jawaban_ibfk_1',
      references: {
        table: 'cbt_soal',
        field: 'soal_id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
    });
    await queryInterface.addIndex('cbt_jawaban', ['jawaban_id'], { name: 'jawaban_id' });
    await queryInterface.addIndex('cbt_jawaban', ['jawaban_soal_id'], { name: 'p_answer_question_id' });
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_jawaban');
  }
};
