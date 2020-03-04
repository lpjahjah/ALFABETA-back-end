'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('atividades', {
      cd_atividade: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cd_nivel: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "niveis",
          key: "cd_nivel",
          onDelete: "cascade"
        }
      },
      nm_atividade: {
        allowNull: false,
        type: Sequelize.STRING
      },
      ds_atividade: {
        allowNull: false,
        type: Sequelize.TEXT
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('atividades');
  }
};