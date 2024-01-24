// migrations/20240119222000-cbt-tes-user.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_tes_user', {
      tesuser_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      tesuser_tes_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        // references: {
        //   model: 'cbt_tes',
        //   key: 'tes_id'
        // }
      },
      tesuser_user_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        // references: {
        //   model: 'cbt_tes', 
        //   key: 'tes_id'
        // }
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
    await queryInterface.addConstraint('cbt_tes_user', {
      fields: ['tesuser_tes_id'],
      type: 'foreign key',
      name: 'cbt_tes_user_ibfk_1',
      references: {
        table: 'cbt_tes',
        field: 'tes_id'
      },
      onDelete: 'cascade',  
      // onUpdate: 'no action'

    });

    await queryInterface.addConstraint('cbt_tes_user', {
      fields: ['tesuser_user_id'],
      type: 'foreign key',
      name: 'cbt_tes_user_ibfk_2',
      references: {
        table: 'cbt_user',
        field: 'user_id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
    });

    await queryInterface.addIndex('cbt_tes_user', ['tesuser_id'], { name: 'tesuser_id' });
    await queryInterface.addIndex('cbt_tes_user', ['tesuser_tes_id', 'tesuser_user_id', 'tesuser_status'], { name: 'ak_testuser', unique: true });
    await queryInterface.addIndex('cbt_tes_user', ['tesuser_user_id'], { name: 'p_testuser_user_id' });
    await queryInterface.addIndex('cbt_tes_user', ['tesuser_tes_id'], { name: 'p_testuser_test_id' });
    await queryInterface.sequelize.query('ALTER TABLE `cbt_tes_user` AUTO_INCREMENT = 5;');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_tes_user');
  }
};
