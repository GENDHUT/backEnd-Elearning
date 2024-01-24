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
    await queryInterface.addConstraint('user_akses', {
      fields: ['kode_menu'],
      type: 'foreign key',
      name: 'user_akses_ibfk_2',
      references: {
        table: 'user_menu',
        field: 'kode_menu'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('user_akses', {
      fields: ['level'],
      type: 'foreign key',
      name: 'user_akses_ibfk_3',
      references: {
        table: 'user_level',
        field: 'level'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addIndex('user_akses', ['id'], { name: 'id' });
    await queryInterface.addIndex('user_akses', ['kode_menu'], { name: 'akses_kode_menu' });
    await queryInterface.addIndex('user_akses', ['level'], { name: 'akses_level' });
    await queryInterface.sequelize.query('ALTER TABLE `user_akses` AUTO_INCREMENT = 505;');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_akses');
  }
};
