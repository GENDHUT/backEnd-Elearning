// migrations/20240119190000-create-cbt-tes.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_tes', {
      tes_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tes_nama: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tes_detail: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tes_begin_time: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      tes_end_time: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      tes_duration_time: {
        type: Sequelize.SMALLINT(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0,
      },
      tes_ip_range: {
        type: Sequelize.STRING(255),
        allowNull: false,
        defaultValue: '*.*.*.*',
      },
      tes_results_to_users: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
      tes_detail_to_users: {
        type: Sequelize.TINYINT(1),
        allowNull: false,
        defaultValue: 0,
      },
      tes_score_right: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 1.00,
      },
      tes_score_wrong: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0.00,
      },
      tes_score_unanswered: {
        type: Sequelize.DECIMAL(10, 2),
        defaultValue: 0.00,
      },
      tes_max_score: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
      },
      tes_token: {
        type: Sequelize.TINYINT(1),
        defaultValue: 0,
      },
    });
    await queryInterface.addIndex('cbt_tes', ['tes_id'], { name: 'tes_id' });
    await queryInterface.addIndex('cbt_tes', ['tes_nama'], { name: 'ak_test_name', unique: true });
    await queryInterface.sequelize.query('ALTER TABLE `cbt_tes` AUTO_INCREMENT = 6;');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_tes');
  }
};
