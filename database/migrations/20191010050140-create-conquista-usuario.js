'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('conquista_usuarios', {
      cd_conquista: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'conquistas',
          key: 'cd_conquista',
          onDelete: "cascade"
        }
      },
      cd_usuario: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuarios',
          key: 'cd_usuario',
          onDelete: "cascade"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('conquista_usuarios');
  }
};