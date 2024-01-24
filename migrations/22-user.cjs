// migrations/20240123140000-create-user.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
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
    await queryInterface.addConstraint('user', {
      fields: ['level'],
      type: 'foreign key',
      name: 'user_ibfk_1',
      references: {
        table: 'user_level',
        field: 'level'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.sequelize.query('ALTER TABLE `user` AUTO_INCREMENT = 6;');
    await queryInterface.addIndex('user', ['id'], { name: 'id' });
    await queryInterface.addIndex('user', ['username'], { name: 'username', unique: true });
    await queryInterface.addIndex('user', ['level'], { name: 'level' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};
