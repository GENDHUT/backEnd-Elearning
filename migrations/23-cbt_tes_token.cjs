// migrations/20240119220000-create-cbt-tes-token.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_tes_token', {
      token_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(11)
      },
      token_isi: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
      token_user_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20).UNSIGNED,
      },
      token_ts: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      token_aktif: {
        allowNull: false,
        type: Sequelize.INTEGER(11),
        defaultValue: 1
      },
      token_tes_id: {
        allowNull: false,
        type: Sequelize.BIGINT(20),
        defaultValue: 0
      }
    });
    await queryInterface.addConstraint('cbt_tes_token', {
      fields: ['token_user_id'],
      type: 'foreign key',
      name: 'cbt_tes_token_ibfk_1',
      references: {
        table: 'user',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'no action'
    });

    await queryInterface.addIndex('cbt_tes_token', ['token_id'], { name: 'token_id' });
    await queryInterface.addIndex('cbt_tes_token', ['token_user_id'], { name: 'token_user_id' });
    await queryInterface.sequelize.query('ALTER TABLE `cbt_tes_token` AUTO_INCREMENT = 13;');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_tes_token');
  }
};
