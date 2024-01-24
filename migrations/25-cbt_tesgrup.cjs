// migrations/20240119200000-create-cbt-tesgrup.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cbt_tesgrup', {
      tstgrp_tes_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      tstgrp_grup_id: {
        type: Sequelize.BIGINT(20).UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
    await queryInterface.addConstraint('cbt_tesgrup', {
      fields: ['tstgrp_tes_id'],
      type: 'foreign key',
      name: 'fk_tstgrp_tes_id',
      references: {
        table: 'cbt_tes',
        field: 'tes_id',
      },
      onDelete: 'CASCADE', 
      onUpdate: 'NO ACTION',
    });

    await queryInterface.addConstraint('cbt_tesgrup', {
      fields: ['tstgrp_grup_id'],
      type: 'foreign key',
      name: 'fk_tstgrp_grup_id',
      references: {
        table: 'cbt_user_grup',
        field: 'grup_id',
      },
      onDelete: 'CASCADE', 
      onUpdate: 'NO ACTION',
    });

    // await queryInterface.addIndex('cbt_tes', ['tes_id'], { name: 'tes_id' });
    // await queryInterface.addIndex('cbt_tes', ['tes_nama'], { name: 'ak_test_name', unique: true });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('cbt_tesgrup', 'fk_tstgrp_tes_id');
    await queryInterface.removeConstraint('cbt_tesgrup', 'fk_tstgrp_grup_id');
    await queryInterface.dropTable('cbt_tesgrup');
  }
};
