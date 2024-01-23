// migrations/20240123000000-create-cbt-topik.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_topik', {
      topik_id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      topik_modul_id: {
        type: Sequelize.BIGINT(20),
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
    await queryInterface.addIndex('cbt_topik', ['topik_id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('cbt_topik', ['topik_modul_id', 'topik_nama'], { name: 'ak_subject_name', unique: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_topik');
  }
};
