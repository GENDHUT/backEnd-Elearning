// migrations/20240125120000-create-user-log.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_log', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      log: {
        type: Sequelize.STRING(250),
        allowNull: false,
      },
      ts: {
        type: Sequelize.TIMESTAMP,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
    await queryInterface.addIndex('user_log', ['id'], { name: 'PRIMARY' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_log');
  }
};
