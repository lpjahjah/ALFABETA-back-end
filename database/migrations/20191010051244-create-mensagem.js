'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mensagens', {
      cd_mensagem: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
          onDelete: "cascade"
        }
      },
      ds_mensagem: {
        allowNull: true,
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mensagens');
  }
};