// seeders/20240119203000-cbt-tesgrup.js

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cbt_tesgrup', [
      { tstgrp_tes_id: 5, tstgrp_grup_id: 5 },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cbt_tesgrup', null, {});
  }
};
