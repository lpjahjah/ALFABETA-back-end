'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('resposta_exercicios', {
      cd_resposta: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'respostas',
          key: 'cd_resposta',
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
          onDelete: "cascade"
        }
      },
      cd_peso: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      ic_certo: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('resposta_exercicios');
  }
};