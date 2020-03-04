'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tipo_exercicios', {
      cd_tipo_exercicio: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nm_tipo_exercicio: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ds_tipo_exercicio: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      nm_link_tutorial_tipo_exercicio: {
        allowNull: true,
        type: Sequelize.TEXT
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tipo_exercicios');
  }
};