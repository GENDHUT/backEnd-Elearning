// migrations/20240119222000-cbt-tes-user.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_tes_user', {
      tesuser_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT.UNSIGNED
      },
      tesuser_tes_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'cbt_tes',
          key: 'tes_id'
        }
      },
      tesuser_user_id: {
        type: Sequelize.BIGINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'cbt_tes', 
          key: 'tes_id'
        }
      },
      tesuser_status: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      tesuser_creation_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      tesuser_comment: {
        type: Sequelize.TEXT,
        collate: 'utf8_unicode_ci',
        defaultValue: null
      },
      tesuser_token: {
        type: Sequelize.STRING(10),
        collate: 'utf8_unicode_ci',
        defaultValue: null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex('cbt_tes_user', ['tesuser_id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('cbt_tes_user', ['tesuser_tes_id', 'tesuser_user_id', 'tesuser_status'], { name: 'ak_testuser', unique: true });
    await queryInterface.addIndex('cbt_tes_user', ['tesuser_user_id'], { name: 'p_testuser_user_id' });
    await queryInterface.addIndex('cbt_tes_user', ['tesuser_tes_id'], { name: 'p_testuser_test_id' });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_tes_user');
  }
};
