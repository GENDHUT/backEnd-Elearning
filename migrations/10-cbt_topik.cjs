// migrations/20240123000000-create-cbt-topik.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_topik', {
      topik_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      topik_modul_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        defaultValue: 1,
      },
      topik_nama: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      topik_detail: {
        type: Sequelize.TEXT,
        collate: 'utf8_unicode_ci',
        defaultValue: null,
      },
      topik_aktif: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
    });
    await queryInterface.addConstraint('cbt_topik', {
      fields: ['topik_modul_id'],
      type: 'foreign key',
      name: 'cbt_topik_ibfk_1',
      references: {
        table: 'cbt_modul',
        field: 'modul_id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
    });


    await queryInterface.addIndex('cbt_topik', ['topik_id'], { name: 'topik_id' });
    await queryInterface.addIndex('cbt_topik', ['topik_modul_id', 'topik_nama'], { name: 'ak_subject_name', unique: true });
    await queryInterface.sequelize.query('ALTER TABLE `cbt_topik` AUTO_INCREMENT = 9;');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_topik');
  }
};
