// migrations/20240123133000-cbt-user-grup.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_user_grup', {
      grup_id: {
        type: Sequelize.BIGINT(20),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      grup_nama: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    });
    await queryInterface.addIndex('cbt_user_grup', ['grup_id'], { name: 'PRIMARY' });
    await queryInterface.addIndex('cbt_user_grup', ['grup_nama'], { name: 'group_name', unique: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cbt_user_grup');
  }
};
