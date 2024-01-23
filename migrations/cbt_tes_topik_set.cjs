// migrations/20240119221000-create-cbt-tes-topik-set.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_tes_topik_set', {
      tset_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20),
        UNSIGNED: true
      },
      tset_tes_id: {
        type: Sequelize.BIGINT(20),
        UNSIGNED: true,
        allowNull: false
      },
      tset_topik_id: {
        type: Sequelize.BIGINT(20),
        UNSIGNED: true,
        allowNull: false
      },
      tset_tipe: {
        type: Sequelize.SMALLINT(6),
        allowNull: false,
        defaultValue: 1
      },
      tset_difficulty: {
        type: Sequelize.SMALLINT(6),
        allowNull: false,
        defaultValue: 1
      },
      tset_jumlah: {
        type: Sequelize.SMALLINT(6),
        allowNull: false,
        defaultValue: 1
      },
      tset_jawaban: {
        type: Sequelize.SMALLINT(6),
        allowNull: false,
        defaultValue: 0
      },
      tset_acak_jawaban: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: 1
      },
      tset_acak_soal: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        defaultValue: 1
      },
    });
    await queryInterface.addIndex('cbt_tes_topik_set', ['tset_id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('cbt_tes_topik_set', ['tset_tes_id'], { name: 'p_tsubset_test_id' });
    await queryInterface.addIndex('cbt_tes_topik_set', ['tset_topik_id'], { name: 'tsubset_subject_id' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_tes_topik_set');
  }
};
