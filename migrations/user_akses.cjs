// migrations/20240123141500-create-user_akses.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_akses', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      level: {
        type: Sequelize.STRING(75),
        allowNull: false,
      },
      kode_menu: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      add: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        defaultValue: 1,
        comment: '0=false, 1=true',
      },
      edit: {
        type: Sequelize.INTEGER(2),
        allowNull: false,
        defaultValue: 1,
        comment: '0=false, 1=true',
      },
    });
    await queryInterface.addIndex('user_akses', ['id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('user_akses', ['kode_menu'], { name: 'akses_kode_menu' });
    await queryInterface.addIndex('user_akses', ['level'], { name: 'akses_level' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_akses');
  }
};
