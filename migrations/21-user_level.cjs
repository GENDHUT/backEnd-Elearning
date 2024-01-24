// migrations/20240124093001-create-user-level.js

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('user_level', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        level: {
          allowNull: false,
          type: Sequelize.STRING(50)
        },
        keterangan: {
          type: Sequelize.STRING(100)
        }
      });
        await queryInterface.addIndex('user_level', ['id'], { name: 'id' });
        await queryInterface.addIndex('user_level', ['level'], { name: 'level', unique: true });
        await queryInterface.sequelize.query('ALTER TABLE `user_level` AUTO_INCREMENT = 9;');
    },
    down: async (queryInterface, Sequelize) => {
      await queryInterface.dropTable('user_level');
    }
  };
  