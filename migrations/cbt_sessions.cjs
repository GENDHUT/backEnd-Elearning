// migrations/20240119181000-create-cbt-sessions.js

'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_sessions', {
      id: {
        type: DataTypes.STRING(128),
        primaryKey: true,
        allowNull: false
      },
      ip_address: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      timestamp: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      data: {
        type: DataTypes.BLOB,
        allowNull: false
      }
    });
    await queryInterface.addIndex('cbt_sessions', ['id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('cbt_sessions', ['timestamp'], { name: 'ci_sessions_timestamp' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_sessions');
  }
};
