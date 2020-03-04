'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('exercicios', {
      cd_exercicio: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cd_atividade: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "atividades",
          key: "cd_atividade",
          onDelete: "cascade"
        }
      },
      cd_nivel: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "atividades",
          key: "cd_nivel",
          onDelete: "cascade"
        }
      },
      nm_enunciado: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ds_exercicio: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      cd_tipo_exercicio: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "tipo_exercicios",
          key: "cd_tipo_exercicio",
          onDelete: "cascade"
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('exercicios');
  }
};