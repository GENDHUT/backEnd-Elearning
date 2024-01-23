// migrations/20240123140000-create-user.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      opsi1: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      opsi2: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      keterangan: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      level: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      ts: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};
