// migrations/20240123121500-cbt-user.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_user', {
      user_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      user_grup_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
      },
      user_name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      user_password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      user_email: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      user_regdate: {
        type: Sequelize.TIMESTAMP,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      user_ip: {
        type: Sequelize.STRING(39),
        defaultValue: null,
      },
      user_firstname: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      user_birthdate: {
        type: Sequelize.DATE,
        defaultValue: null,
      },
      user_birthplace: {
        type: Sequelize.STRING(255),
        defaultValue: null,
      },
      user_level: {
        type: Sequelize.SMALLINT(3).UNSIGNED,
        allowNull: false,
        defaultValue: 1,
      },
      user_detail: {
        type: Sequelize.STRING(25),
        defaultValue: null,
      },
    });
    await queryInterface.addIndex('cbt_user', ['user_id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('cbt_user', ['user_name'], { name: 'ak_user_name', unique: true });
    await queryInterface.addIndex('cbt_user', ['user_grup_id'], { name: 'user_groups_id' });
    await queryInterface.addIndex('cbt_user', ['user_detail'], { name: 'user_detail' });
    // await queryInterface.addIndex('user', ['id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('cbt_user', ['username'], { name: 'username', unique: true });
    await queryInterface.addIndex('cbt_user', ['level'], { name: 'level' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_user');
  }
};
