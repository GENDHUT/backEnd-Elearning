// migrations/20240126120000-create-user-menu.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_menu', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      tipe: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
        comment: '0=parent, 1=child',
      },
      parent: {
        type: Sequelize.STRING(50),
        defaultValue: null,
      },
      kode_menu: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      nama_menu: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      url: {
        type: Sequelize.STRING(150),
        allowNull: false,
        defaultValue: '#',
      },
      icon: {
        type: Sequelize.STRING(75),
        allowNull: false,
        defaultValue: 'fa fa-circle-o',
      },
      urutan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
    await queryInterface.addIndex('user_menu', ['id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('user_menu', ['kode_menu'], { unique: true, name: 'kode_menu' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_menu');
  }
};
