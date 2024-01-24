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
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false
      },
      tset_topik_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
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
    await queryInterface.addConstraint('cbt_tes_topik_set', {
      fields: ['tset_tes_id'],
      type: 'foreign key',
      name: 'cbt_tes_topik_set_ibfk_1',
      references: {
        table: 'cbt_tes',
        field: 'tes_id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
    });

    await queryInterface.addConstraint('cbt_tes_topik_set', {
      fields: ['tset_topik_id'],
      type: 'foreign key',
      name: 'cbt_tes_topik_set_ibfk_2',
      references: {
        table: 'cbt_topik',
        field: 'topik_id'
      },
      onDelete: 'no action',
      onUpdate: 'no action'
    });

    await queryInterface.addIndex('cbt_tes_topik_set', ['tset_id'], { name: 'tset_id' });
    await queryInterface.addIndex('cbt_tes_topik_set', ['tset_tes_id'], { name: 'p_tsubset_test_id' });
    await queryInterface.addIndex('cbt_tes_topik_set', ['tset_topik_id'], { name: 'tsubset_subject_id' });
    await queryInterface.sequelize.query('ALTER TABLE `cbt_tes_topik_set` AUTO_INCREMENT = 6;');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_tes_topik_set');
  }
};
