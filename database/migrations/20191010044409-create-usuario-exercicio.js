'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('usuario_exercicios', {
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
      cd_exercicio: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'exercicios',
          key: 'cd_exercicio',
          onDelete: "cascade"
        }
      },
      cd_atividade: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'exercicios',
          key: 'cd_atividade',
          onDelete: "cascade"
        }
      },
      cd_nivel: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'exercicios',
          key: 'cd_nivel',
          
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('usuario_exercicios');
  }
};